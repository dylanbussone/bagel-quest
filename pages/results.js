import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Router, { useRouter } from 'next/router';

// TODO: enable after 5pm
const SHOW_RESULTS = false;

// map of bagelId to the name
const bagelMapping = {
    1: "Westman's",
    2: 'Dingfelders',
    3: 'Mt. Bagel',
    4: 'Loxsmith',
    5: "Schmaltzy's Delicatessen",
    6: 'Rubenstein Bagels',
    7: 'Seattle Bagel Bakery',
    8: 'PorkChop & Co',
    9: 'Macrina',
    10: 'Zylberschtein’s',
    11: 'Grateful Bread',
    12: 'Little Lago',
    13: 'Bagel asis',
    14: 'Eltana',
    15: 'Blazing Bagels',
};

export default function Results() {
    const [loadingBagelVotes, setLoadingBagelVotes] = useState(true);
    const [bagelVotes, setBagelVotes] = useState([]);
    const [useSmallChart, setUseSmallChart] = useState(false);

    const router = useRouter();
    const showSuccessMessage = router.query.success === 'true';

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 700) {
            setUseSmallChart(true);
        }
    }, []);

    useEffect(() => {
        if (showSuccessMessage) {
            setTimeout(() => {
                Router.push('/results');
            }, 2000);
        }
    }, [showSuccessMessage]);

    useEffect(() => {
        async function fetchBagelVotes() {
            const response = await fetch('/api/results', { method: 'GET' });
            let json = await response.json();
            setLoadingBagelVotes(false);
            json = json
                .filter((x) => x.score !== null)
                .map((x) => {
                    x.bagelId = x.bagel_id;
                    delete x.bagel_id;
                    x.score = parseInt(x.score, 10) || 0;
                    x.score = Math.max(0, x.score);
                    x.score = Math.min(10, x.score);
                    return x;
                });
            setBagelVotes(json);
        }
        fetchBagelVotes();
    }, []);
    const avgScores = bagelVotes
        .reduce((acc, cur) => {
            if (acc[cur.bagelId - 1]) {
                acc[cur.bagelId - 1].score += cur.score;
            } else {
                acc[cur.bagelId - 1] = {
                    bagelId: cur.bagelId,
                    bakery: bagelMapping[cur.bagelId],
                    label: `#${cur.bagelId}`,
                    score: cur.score,
                };
            }
            return acc;
        }, [])
        .filter(Boolean)
        .map((x) => {
            const numVotes = bagelVotes.filter((bv) => bv.bagelId === x.bagelId).length;
            x.score = x.score / numVotes;
            x.score = Math.round(x.score * 10) / 10; // round to 1 decimal place
            return x;
        });

    const chartDimensions = {
        width: useSmallChart ? 400 : 800,
        height: useSmallChart ? 300 : 600,
    };

    return (
        <main className="results">
            <h1 className="title">Results</h1>

            {!loadingBagelVotes && (
                <React.Fragment>
                    {bagelVotes.length > 0 ? (
                        SHOW_RESULTS ? (
                            <React.Fragment>
                                <h2>Average scores:</h2>
                                <div className="combined-scores">
                                    <BarChart
                                        width={chartDimensions.width}
                                        height={chartDimensions.height}
                                        data={avgScores}
                                        margin={{
                                            top: useSmallChart ? -24 : -80,
                                            right: 0,
                                            left: -20,
                                            bottom: 0,
                                        }}
                                    >
                                        <XAxis dataKey="label" interval={0} />
                                        <YAxis ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} label="Score" />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="score" fill="#8884d8" />
                                    </BarChart>
                                </div>
                            </React.Fragment>
                        ) : (
                            <p>Be sure to check back after 5pm for the final results!</p>
                        )
                    ) : (
                        <p>Coming soon</p>
                    )}
                </React.Fragment>
            )}

            {showSuccessMessage && (
                <div className="success-message">
                    <span>Submitted!</span>
                </div>
            )}

            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
                    min-height: 100vh;
                }
                h1 {
                    margin-bottom: 1rem;
                }

                .combined-scores {
                    display: flex;
                    justify-content: center;
                }

                .success-message {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.75);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .success-message span {
                    background: white;
                    padding: 1rem 2rem;
                    color: green;
                    border-radius: 4px;
                }
                @media (max-width: 700px) {
                    h1.title {
                        display: none;
                    }
                }
            `}</style>
        </main>
    );
}

function CustomTooltip({ active, payload }) {
    if (active && payload && payload[0]) {
        const bagelId = payload[0].payload.bagelId;
        const bakery = payload[0].payload.bakery;
        const score = payload[0].payload.score;
        return (
            <div className="custom-tooltip">
                <div>
                    <label>#{bagelId}:</label>
                    <span>{bakery}</span>
                </div>
                <div>
                    <label>Avg Score:</label>
                    <span>{score}</span>
                </div>
                <style jsx>{`
                    .custom-tooltip {
                        background: rgba(255,255,255,0.9);
                        padding: 12px;
                    }
                    .custom-tooltip > div {
                        margin: 8px 0;
                        text-align: left;
                    }
                    .custom-tooltip label {
                        font-weight: bold;
                        margin-right: 6px;
                    }
                `}</style>
            </div>
        );
    }
    return null;
}

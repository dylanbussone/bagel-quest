import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BarChart, XAxis, YAxis, Tooltip, Bar, CartesianAxis, CartesianGrid } from 'recharts';
import Router, { useRouter } from 'next/router';
import { LOCAL_STORAGE_KEY } from './vote';

const SHOW_RESULTS = true;

// map of bagelId to the name
const bagelMapping = {
    1: "Westman's",
    2: 'Dingfelders',
    3: 'Mt. Bagel',
    4: 'Loxsmith',
    5: "Schmaltzy's",
    6: 'Rubenstein Bagels',
    7: 'Seattle Bagel Bakery',
    8: 'PorkChop & Co',
    9: 'Macrina',
    10: 'Zylberschtein’s',
    11: 'Grateful Bread',
    12: 'Little Lago',
    13: 'Bagel Oasis',
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
            // const response = await fetch('/api/results', { method: 'GET' });
            const response = await fetch('/results.json');

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

    const usersScores =
        typeof localStorage !== 'undefined' &&
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}').votes;

    const chartDimensions = {
        width: useSmallChart ? 450 : 1000,
        height: useSmallChart ? 300 : 600,
    };

    const numVoters = Math.floor(bagelVotes.length / 15);

    return (
        <main className="results">
            {!loadingBagelVotes && (
                <React.Fragment>
                    {bagelVotes.length > 0 ? (
                        SHOW_RESULTS ? (
                            <React.Fragment>
                                {/* <h2>The bagels:</h2>
                                <div className="bakery-list">
                                    {Object.keys(bagelMapping).map((b) => (
                                        <div key={b}>
                                            <label>Bagel {b}:</label>
                                            <span>{bagelMapping[b]}</span>
                                        </div>
                                    ))}
                                </div> */}

                                <p>
                                    Thanks everyone for participating in Bagel Quest! We hope you
                                    had a great time tasting the best bagels Seattle has to offer.
                                    <br />
                                    We look forward to doing this again next year, where we can
                                    hopefully all taste in the same room.
                                </p>

                                {/* <p>
                                    Winners will be announced once we're sure all survey results are
                                    in.
                                </p> */}

                                <p>Without further ado...</p>

                                <div className="winners">
                                    <div>
                                        <h3>1st place: Loxsmith</h3>
                                        <p>Average score: 6.50</p>
                                    </div>
                                    <div>
                                        <h3>2nd place: Grateful Bread</h3>
                                        <p>Average score: 6.49</p>
                                    </div>
                                    <div>
                                        <h3>3rd place: Mt. Bagel</h3>
                                        <p>Average score: 6.41</p>
                                    </div>
                                </div>

                                <div className="avg-scores">
                                    <BarChart
                                        layout="vertical"
                                        width={chartDimensions.width}
                                        height={chartDimensions.height}
                                        data={avgScores}
                                        margin={{
                                            right: useSmallChart ? -24 : -140,
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <YAxis dataKey="bakery" type="category" tick={false} />
                                        <XAxis
                                            type="number"
                                            ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                        />
                                        <Tooltip
                                            content={<CustomTooltip usersScores={usersScores} />}
                                        />
                                        <Bar
                                            dataKey="score"
                                            fill="#8884d8"
                                            label={(x) =>
                                                `#${x.index + 1}: ${bagelMapping[x.index + 1]}`
                                            }
                                        />
                                        <CartesianGrid stroke="rgba(0,0,0,0.1)" />
                                        <CartesianAxis stroke="rgba(0,0,0,0.1)" />
                                    </BarChart>
                                </div>

                                <p>(Based on {numVoters} voters)</p>
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

                .winners h2 {
                    margin: 16px 0;
                }
                .winners div {
                    margin: 32px 0;
                }
                .winners p {
                    margin: 0;
                }

                .bakery-list {
                    width: 310px;
                    margin: 32px auto;
                }

                .bakery-list > div {
                    margin: 16px 0;
                    font-size: 18px;
                    text-align: left;
                }

                .bakery-list > div > label {
                    width: 90px;
                    display: inline-block;
                }
                .bakery-list > div > span {
                }

                .avg-scores {
                    margin: 32px 0 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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

function CustomTooltip({ active, payload, usersScores }) {
    if (active && payload && payload[0]) {
        const bagelId = payload[0].payload.bagelId;
        const bakery = payload[0].payload.bakery;
        const score = payload[0].payload.score;
        const usersScore = ((usersScores && usersScores[bagelId]) || {}).score;
        const usersNotes = ((usersScores && usersScores[bagelId]) || {}).comment;

        return (
            <div className="custom-tooltip">
                <div>
                    <label>Bagel {bagelId}:</label>
                    <span>{bakery}</span>
                </div>
                <div>
                    <label>Avg. Score:</label>
                    <span>{score}</span>
                </div>
                {usersScore !== undefined && (
                    <div>
                        <label>Your Score:</label>
                        <span>{usersScore}</span>
                    </div>
                )}
                {usersNotes !== undefined && (
                    <div>
                        <label>Your Notes:</label>
                        <span>{usersNotes}</span>
                    </div>
                )}
                <style jsx>{`
                    .custom-tooltip {
                        background: rgba(255, 255, 255, 0.9);
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

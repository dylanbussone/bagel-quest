import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BarChart, XAxis, YAxis, Tooltip, Bar, Label, LabelList } from 'recharts';
import Router, { useRouter } from 'next/router';

// TODO: enable after 5pm
const SHOW_RESULTS = false;

// map of bagelId to the name
const bagelMapping = {
    // TODO
};

export default function Results() {
    const [loadingBagelVotes, setLoadingBagelVotes] = useState(true);
    const [bagelVotes, setBagelVotes] = useState([]);

    const router = useRouter();
    const showSuccessMessage = router.query.success === 'true';

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
            json = json.map((x) => {
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
                    name: `Bagel #${cur.bagelId}`,
                    score: cur.score,
                };
            }
            return acc;
        }, [])
        .filter(Boolean)
        .map((x) => {
            x.score = x.score / (bagelVotes.length / 14);
            x.score = Math.round(x.score * 10) / 10; // round to 1 decimal place
            return x;
        });

    return (
        <main className="results">
            <h1 className="title">Results</h1>

            {!loadingBagelVotes && (
                <React.Fragment>
                    {bagelVotes.length > 0 ? (
                        SHOW_RESULTS ? (
                            <React.Fragment>
                                <h2>Final scores:</h2>
                                <div className="combined-scores">
                                    <BarChart width={1100} height={450} data={avgScores}>
                                        <XAxis dataKey="bagelId" hide="true" />
                                        <YAxis ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                                        <Tooltip />
                                        <Bar dataKey="score" fill="#8884d8">
                                            <LabelList dataKey="name" position="top" />
                                        </Bar>
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

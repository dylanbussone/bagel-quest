import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BarChart, XAxis, YAxis, Tooltip, Bar, Label, LabelList } from 'recharts';

// map of bagelId to the name
const bagelMapping = {
    // TODO
};

export default function Results() {
    const [bagelVotes, setBagelVotes] = useState([]);

    useEffect(() => {
        async function fetchBagelVotes() {
            const response = await fetch('/api/results', { method: 'GET' });
            let json = await response.json();
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

    console.log('bagelVotes', bagelVotes);

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
            return x;
        });

    console.log('avgScores', avgScores);

    return (
        bagelVotes.length > 0 && (
            <main className="results">
                <h1 className="title">Results</h1>

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

            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
                    min-height: 100vh;
                }
                h1 {
                    margin-bottom: 1rem;
                }
                @media (max-width: 700px) {
                    h1.title {
                        display: none;
                    }
                }
            `}</style>
        </main>
        )
    );
}

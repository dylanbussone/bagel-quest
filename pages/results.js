import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';

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

    const combinedScores = bagelVotes.reduce((acc, cur) => {
        if (acc[cur.bagelId - 1]) {
            acc[cur.bagelId - 1].score += cur.score;
        } else {
            acc[cur.bagelId - 1] = {
                bagelId: cur.bagelId,
                score: cur.score,
            };
        }
        return acc;
    }, []).filter(Boolean);

    console.log('combinedScores', combinedScores);

    return bagelVotes.length > 0 && (
        <main className="results">
            <h1 className="title">Results</h1>

            <h2>Total combined scores:</h2>
            <div className="combined-scores">
                <BarChart width={730} height={250} data={combinedScores}>
                    <XAxis dataKey="bagelId" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
            </div>

            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
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
    );
}

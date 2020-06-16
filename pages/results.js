import React from 'react';

export default function Results() {
    return (
        <main className="results">
            <h1 className="title">Results</h1>
            <div>Coming soon...</div>

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

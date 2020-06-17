import fetch from 'node-fetch';
import React, { useState } from 'react';

const submitVotes = async ({ username, voteData, setDisableVote }) => {
    setDisableVote(true);
    const response = await fetch('/api/vote', {
        method: 'POST',
        body: JSON.stringify({ username, voteData }),
        headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();

    if (json && json.affectedRows > 0) {
        document.location.href = '/results?success=true';
    } else {
        alert('Error, try again or text Sarah');
        setDisableVote(false);
    }
};

export default function Vote() {
    const [username, setUsername] = useState('');
    const [disableVote, setDisableVote] = useState(false);

    const [voteData, setVoteData] = useState({
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {},
        11: {},
        12: {},
        13: {},
        14: {},
    });

    return (
        <main className="vote">
            <h1 className="title">Vote</h1>

            <section>
                <h3 style={{ display: 'inline-block' }}>Your name:</h3>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />

                <div className="vote-sections">
                    {Object.keys(voteData).map((bagelId) => {
                        return (
                            <div className="vote-section" key={`vote-section-${bagelId}`}>
                                <h3>Bagel #{bagelId}</h3>
                                <span>
                                    <label>
                                        Your score:
                                        <p className="tiny">(1 = shitty, 10 = amazing)</p>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="1-10"
                                        value={voteData[bagelId].score || ''}
                                        className="small"
                                        maxLength="2"
                                        onChange={(e) => {
                                            const newVoteData = { ...voteData };
                                            newVoteData[bagelId].score = e.target.value;
                                            setVoteData(newVoteData);
                                        }}
                                    />
                                </span>
                                <span>
                                    <label>Comments:</label>
                                    <textarea
                                        value={voteData[bagelId].comment || ''}
                                        placeholder="Appearance, texture, taste..."
                                        onChange={(e) => {
                                            const newVoteData = { ...voteData };
                                            newVoteData[bagelId].comment = e.target.value;
                                            setVoteData(newVoteData);
                                        }}
                                    />
                                </span>
                                <div className="hr" />
                            </div>
                        );
                    })}
                </div>

                <button
                    disabled={disableVote}
                    onClick={() => {
                        submitVotes({ username, voteData, setDisableVote });
                    }}
                >
                    Submit
                </button>
            </section>

            <style jsx>{`
                .vote {
                }

                section {
                    margin: 2rem 0;
                }

                section.disabled {
                    opacity: 0.3;
                }

                input,
                textarea {
                    margin-left: 1rem;
                    padding: 0.25rem;
                }

                h3 {
                    margin-bottom: 1rem;
                }

                input.small {
                    width: 3rem;
                }

                p.tiny {
                    font-size: 70%;
                    margin-left: 1rem;
                    margin-top: 0;
                }

                textarea {
                    height: 4rem;
                    width: 240px;
                }

                .vote-sections {
                    margin: 3rem 0;
                }

                .vote-section {
                    margin-bottom: 3rem;
                }

                .vote-section span {
                    margin-right: 2rem;
                    display: inline-flex;
                    align-items: flex-start;
                }

                .hr {
                    height: 1px;
                    width: 50%;
                    background: #654321;
                    opacity: 0.25;
                    margin: 1rem auto;
                }

                button {
                    background-color: #4caf50;
                    border: none;
                    color: white;
                    padding: 12px 24px;
                    text-decoration: none;
                    cursor: pointer;
                }
                @media (max-width: 700px) {
                    h1.title {
                        display: none;
                    }
                    .hr {
                        width: 100%;
                    }
                    textarea {
                        width: 100%;
                    }
                    .vote-section span {
                        margin-right: 0;
                        display: flex;
                        align-items: flex-start;
                        justify-content: flex-start;
                    }
                    p.tiny {
                        margin-left: 0;
                    }
                    button {
                        width: 100%;
                    }
                }
            `}</style>
        </main>
    );
}

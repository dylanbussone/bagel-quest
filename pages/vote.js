import Link from 'next/link';
import fetch from 'node-fetch';

export default function Vote() {
    const submitVote = async (data) => {
        const response = await fetch('/api/survey', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        console.log('asdf', json);
        if (json && json.affectedRows === 1) {
            alert('Donions!');
        } else {
            alert('Error, try again or text Sarah and yell at her');
        }
    };

    return (
        <main className="vote">
            <h1 className="title">Vote</h1>
            <Link href="/">
                <a>Home</a>
            </Link>

            <button onClick={() => submitVote({
                username: 'test',
                bagelId: '18',
                score: 3,
                comment: 'asdfasdfasdf',
            })}>Submit</button>

            <style jsx>{`
                .vote {
                }
            `}</style>
        </main>
    );
}

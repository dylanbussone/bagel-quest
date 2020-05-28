import Link from 'next/link';
import fetch from 'node-fetch';

export default function Vote() {
    const submitVote = async (options) => {
        const response = await fetch('/api/survey', {
            method: 'POST',
            body: JSON.stringify(options),
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json();
        console.log('done!', json);
    };

    return (
        <main className="vote">
            <h1 className="title">Vote</h1>
            <Link href="/">
                <a>Home</a>
            </Link>

            <button onClick={() => submitVote({ fakeData: 'big time' })}>Submit</button>

            <style jsx>{`
                .vote {
                }
            `}</style>
        </main>
    );
}

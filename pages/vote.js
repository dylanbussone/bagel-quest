import Link from 'next/link';

export default function Vote() {
    return (
        <main className="vote">
            <h1 className="title">Vote</h1>
            <Link href="/">
                <a>Home</a>
            </Link>

            <style jsx>{`
                .vote {

                }
            `}</style>
        </main>
    );
};

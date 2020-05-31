import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/survey">
                        <a>Delivery Survey</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vote">
                        <a>Bagel Voting</a>
                    </Link>
                </li>
            </ul>

            <style jsx>{`
                header {
                    text-align: left;
                    margin-top: 1rem;
                    overflow: hidden;
                }

                ul,
                li {
                    list-style-type: none;
                }
                li {
                    display: inline;
                    margin-right: 2rem;
                }
                a {
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </header>
    );
}

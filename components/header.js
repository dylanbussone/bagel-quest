import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();

    return (
        <header>
            <ul>
                <li className={router.pathname === '/' ? 'active' : ''}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={router.pathname === '/delivery-info' ? 'active' : ''}>
                    <Link href="/delivery-info">
                        <a>Delivery Info</a>
                    </Link>
                </li>
                <li className={router.pathname === '/payment' ? 'active' : ''}>
                    <Link href="/payment">
                        <a>Payment</a>
                    </Link>
                </li>
                <li className={router.pathname === '/vote' ? 'active' : ''}>
                    <Link href="/vote">
                        <a>Vote</a>
                    </Link>
                </li>
                <li className={router.pathname === '/results' ? 'active' : ''}>
                    <Link href="/results">
                        <a>Results</a>
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
                    white-space: nowrap;
                    font-size: 18px;
                }
                li:last-of-type {
                    margin-right: 0;
                }
                a {
                    text-decoration: none;
                    color: darkslateblue;
                }
                li.active a {
                    color: darkmagenta;
                }
                a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 900px) {
                    li {
                        margin-right: 1rem;
                        font-size: 16px;
                    }
                    ul {
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </header>
    );
}

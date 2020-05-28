import Link from 'next/link';
import Bakeries from '../components/bakeries';

export default function Home() {
    return (
        <main>
            <h1 className="title">Bagel Quest 2020</h1>
            <Link href="/vote">
                <a>Vote</a>
            </Link>

            <img src="/bagel1.svg" className="bagel-hero" />

            <p className="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra erat diam,
                et pellentesque nunc iaculis et. Etiam accumsan ac felis finibus egestas. Nullam id
                felis eget urna vehicula tincidunt. Donec volutpat ligula et sem lobortis, a euismod
                ligula fringilla. Nullam pulvinar lectus ornare est dapibus, ac gravida felis
                ultricies. Nam a consectetur est. Aenean hendrerit vel enim a luctus. Suspendisse
                luctus pellentesque lectus vel finibus. Suspendisse quis dignissim ante, nec
                bibendum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae;
            </p>

            <h2 className="bakeries-title">The Bakeries</h2>
            <Bakeries />

            <style jsx>{`
                .bagel-hero {
                }

                .about {
                    margin-top: 0;
                }

                .bakeries-title {
                    margin: 5rem 0 2rem;
                }
            `}</style>
        </main>
    );
}

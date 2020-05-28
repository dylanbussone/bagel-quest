import Head from 'next/head';
import Bakeries from '../components/bakeries';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bagel Quest</title>
                <link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main>
                <h1 className="title">Bagel Quest 2020</h1>

                <img src="/bagel1.svg" className="bagel-hero" />

                <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra erat diam, et pellentesque nunc iaculis et. Etiam accumsan ac felis finibus egestas. Nullam id felis eget urna vehicula tincidunt. Donec volutpat ligula et sem lobortis, a euismod ligula fringilla. Nullam pulvinar lectus ornare est dapibus, ac gravida felis ultricies. Nam a consectetur est. Aenean hendrerit vel enim a luctus. Suspendisse luctus pellentesque lectus vel finibus. Suspendisse quis dignissim ante, nec bibendum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>

                <h2 className="bakeries-title">The Bakeries</h2>
                <Bakeries />
            </main>

            <style jsx>{`
                main {
                    padding: 2rem;
                    text-align: center;
                }

                // @media (max-width: 600px) {
                // }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                }

                body {
                    background: #B5D3E7;
                    font-family: 'Sniglet', sans-serif;
                    font-size: 150%;
                    color: #654321;
                }

                h1, h2, h3, h4 {
                    margin: 0;
                }

                h1.title {
                    font-size: 5rem;
                }

                .bagel-hero {
                }

                .about {
                    margin-top: 0;
                }

                .bakeries-title {
                    margin: 5rem 0 2rem;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}

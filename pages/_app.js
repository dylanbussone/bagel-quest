import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';
import Header from '../components/header';

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Head>
                    <title>Bagel Quest</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.png" />
                </Head>

                <Header />

                <Component {...pageProps} />

                <style jsx global>{`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                        font-size: 16px;
                    }

                    body {
                        background: #b5d3e7;
                        font-family: 'Sniglet', sans-serif;
                        color: #654321;
                    }

                    input, textarea {
                        font-family: sans-serif;
                    }

                    h1,
                    h2,
                    h3,
                    h4 {
                        margin: 0;
                    }

                    main {
                        padding: 2rem;
                        text-align: center;
                    }

                    * {
                        box-sizing: border-box;
                    }

                    .smcx-widget {
                        margin: 1rem auto !important;
                    }

                    @media (max-width: 900px) {
                        main {
                            padding: 1rem;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

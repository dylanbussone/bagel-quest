import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import Bakeries from '../components/bakeries';

export default function Home() {
    const router = useRouter();
    const showSuccessMessage = router.query.success === 'true';

    useEffect(() => {
        if (showSuccessMessage) {
            setTimeout(() => {
                Router.push('/');
            }, 2000);
        }
    }, [showSuccessMessage]);

    return (
        <main>
            <h1 className="title">Bagel Quest 2020</h1>

            <div className="bagel-hero" />

            <div className="about">
                <h4>Hello and welcome to Bagel Quest!</h4>
                <br />
                The Seattle Met recently posted an{' '}
                <a
                    href="https://www.seattlemet.com/eat-and-drink/2020/05/seattle-actually-has-a-bagel-scene-now-macrina-bakery-mt-bagel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    article
                </a>{' '}
                claiming that Seattle now has a bagel scene. We will be the judge of that.
                <br />
                <br />
                Here is the deal:
                <br />
                <br />
                Below you will find the list of bakeries participating. The bagels will be cut into
                quarters and distributed to all of you. Since I will need a lot of packaging, I will
                be using all earth friendly materials. From there, I will deliver them to your homes
                for tasting!
                <br />
                <br />
                Please proceed to the{' '}
                <Link href="/delivery-info">
                    <a>Delivery Info</a>
                </Link>{' '}
                page and enter your information. If we do not have your information by x/x/2020, we
                will assume you are not participating and find a replacement.
                <br />
                <br />
                Each bag will have a number on it. As you taste, please rate and comment on our
                voting page. Sunday evening at 5, we will post the results of the survey as well as
                what bakery each bagel number belonged to (so make sure to keep track).
                <br />
                <br />
                When it comes to cost, I will be charging for the bagels, tipping at the bakeries
                (#supportlocal) and packaging. In order to pay, please venmo me at @sarah-leviton.
                The cost is $x.xx for singles and $x.xx for doubles and $x.xx if you answered that
                you wanted cream cheese, it’s an extra $x.xx.The cost difference comes from the
                reusable foldaway bags I am purchasing.
            </div>

            <h2 className="bakeries-title">The Bakeries</h2>
            <Bakeries />

            {showSuccessMessage && (
                <div className="success-message">
                    <span>Submitted!</span>
                </div>
            )}

            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                h1 {
                    font-size: 4rem;
                }
                .bagel-hero {
                    background-image: url('/bagel1.svg');
                    background-position: top center;
                    background-repeat: no-repeat;
                    background-size: contain;
                    height: 700px;
                }

                @media only screen and (max-width: 900px) {
                    .bagel-hero {
                        height: 400px;
                    }
                    h1 {
                        font-size: 3rem;
                    }
                }
                @media only screen and (max-width: 600px) {
                    .bagel-hero {
                        height: 300px;
                    }
                    h1 {
                        font-size: 2rem;
                    }
                }
                @media only screen and (max-width: 500px) {
                    .bagel-hero {
                        height: 200px;
                    }
                }

                .about {
                    margin-top: 0;
                    text-align: left;
                }

                .bakeries-title {
                    margin: 5rem 0 2rem;
                }

                .success-message {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.75);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .success-message span {
                    background: white;
                    padding: 1rem 2rem;
                    color: green;
                    border-radius: 4px;
                }
            `}</style>
        </main>
    );
}

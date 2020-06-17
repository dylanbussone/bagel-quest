import React from 'react';

export default function Payment() {
    return (
        <main className="payment">
            <h1 className="title">Payment</h1>

            <div className="split">
                <section>
                    <h3>Cost:</h3>
                    <p>
                        <span className="small">
                            <i>
                                Cost goes to: 14 bagel quarters per person, tips (#supportlocal),
                                and biodegradable/reusable packaging.
                            </i>
                        </span>
                        <p>
                            <span className="big green">$15</span> per single person household
                        </p>
                        <p>
                            <span className="big green">$27</span> per 2 person household
                        </p>
                        <i>
                            <span className="green">+$12</span> per additional person
                        </i>
                        <br />
                        <i>
                            <span className="green">+$7</span> if you requested Dingfelders cream
                            cheese
                        </i>
                    </p>
                    <p>
                        <span className="green">
                            Payment Method: Venmo <span className="big">@sarah-leviton</span>
                        </span>
                        <br />
                        <i>Please reach out if you do not have Venmo.</i>
                    </p>
                    <br />
                    <h3>Delivery:</h3>
                    <p className="small">
                        I am not charging for delivery, but will only be delivering to:
                        <br />
                        <br />
                        Capitol Hill, Ballard, Fremont, Queene Anne, Northgate, Wallingford,
                        Greenwood, SLU, Downtown, Greenlake, U-District and any other small
                        neighborhoods that I might have forgotten that fall in that range.
                        <br />
                        <br />
                        <p>
                            If you live outside of this range and would still like to participate,
                            please reach out and we can arrange for pick up.
                        </p>
                    </p>
                </section>

                <div>
                    <img src="/payment.jpg" />
                    <span className="photo-credit">
                        Photo:{' '}
                        <a
                            href="https://www.instagram.com/herbakinglab/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @herbakinglab
                        </a>
                    </span>
                </div>
            </div>

            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                h1 {
                    margin-bottom: 1rem;
                }
                .split {
                    display: flex;
                }
                @media only screen and (max-width: 900px) {
                    .split {
                        display: block;
                    }
                }
                section {
                    text-align: left;
                    padding-right: 1rem;
                }
                img {
                    max-height: 600px;
                    width: 100%;
                    max-width: 480px;
                    border-radius: 8px;
                }
                i {
                    font-size: 90%;
                }
                .big {
                    font-size: 125%;
                    display: inline-block;
                }
                .small {
                    font-size: 90%;
                }
                h3 {
                    font-weight: normal;
                    margin: 1rem 0;
                }
                .green {
                    color: olivedrab;
                }
                .photo-credit {
                    font-size: 75%;
                    display: block;
                }
                .photo-credit a {
                    color: darkslateblue;
                    text-decoration: none;
                }
                .photo-credit a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 900px) {
                    img {
                        height: 420px;
                        width: 300px;
                        margin-top: 16px;
                    }
                    h1.title {
                        display: none;
                    }
                }
            `}</style>
        </main>
    );
}

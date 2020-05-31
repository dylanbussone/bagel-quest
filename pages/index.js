import Link from 'next/link';
import Bakeries from '../components/bakeries';

export default function Home() {
    return (
        <main>
            <h1 className="title">Bagel Quest 2020</h1>

            <img src="/bagel1.svg" className="bagel-hero" />

            <p className="about">
                <h4>Hi Friends! & Welcome to Bagel Quest!</h4>
                <br />
                The Seattle Met recently posted an{' '}
                <a
                    href="https://www.seattlemet.com/eat-and-drink/2020/05/seattle-actually-has-a-bagel-scene-now-macrina-bakery-mt-bagel"
                    target="_blank"
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
                <Link href="/survey">
                    <a>Delivery Survey</a>
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
                The cost is $x.xx for singles and $x.xx for doubles and $x.xx if you answered in the
                survey that you wanted cream cheese, it’s an extra $x.xx.The cost difference comes
                from the reusable foldaway bags I am purchasing.
            </p>

            <h2 className="bakeries-title">The Bakeries</h2>
            <Bakeries />

            <style jsx>{`
                .bagel-hero {
                }

                .about {
                    margin-top: 0;
                    text-align: left;
                }

                .bakeries-title {
                    margin: 5rem 0 2rem;
                }
            `}</style>
        </main>
    );
}

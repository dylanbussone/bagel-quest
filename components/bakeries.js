const bakeries = [
    {
        name: 'Bagel Oasis - Ravenna',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'https://seattlebageloasis.com/index.html',
        image: '/bagel-oasis.PNG',
    },
    {
        name: 'Blazing Bagels - U-District',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'https://www.blazingbagels.com/',
        image: '/blazing-bagels.PNG',
    },
    {
        name: 'Dingfelders Delicatessen - Capitol Hill',
        url: 'http://dingfelders.com/',
        image: '/dingfelders.PNG',
    },
    {
        name: 'Grateful Bread - N. U-District',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'https://gratefulbreadbaking.com/seattle/',
        image: '/grateful-bread.PNG',
    },
    {
        name: 'Little Lago - North Capitol Hill',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'http://littlelago.com/',
        image: '/little-lago.PNG',
    },
    {
        name: 'Macrina Bakery - Multiple Locations (bagels from Belltown)',
        url: 'https://www.macrinabakery.com/',
        image: '/macrina.PNG',
    },
    {
        name: 'Porkchop & Co. - Ballard',
        url: 'https://www.eatatporkchop.com/',
        image: '/porkchopandco.PNG',
    },
    {
        name: 'Rubinstein Bagels - Downtown',
        url: 'https://rubinsteinbagels.com/',
        image: '/rubinstein.PNG',
    },
    {
        name: 'Schmaltzy’s Delicatessen - Ballard',
        url: 'https://schmaltzysdeli.com/',
        image: '/schmaltzys.PNG',
    },
    {
        name: 'Seattle Bagel Bakery - Downtown',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'https://seattlebagel.com/',
        image: '/seattle-bagel-bakery.PNG',
    },
    {
        name: 'Shawn’s Cafe & Bakery',
        image: '/shawns.PNG',
    },
    {
        name: 'Westman’s Bagel & Coffee - Capitol Hill',
        photoCreditName: '@herbakinglab',
        photoCreditUrl: 'https://www.instagram.com/herbakinglab/',
        url: 'http://www.westmansbagel.com/',
        image: '/westmans.PNG',
    },
    {
        name: 'Zylberschtein’s - Northgate',
        url: 'https://www.zylberschtein.com/',
        image: '/zylberschteins.PNG',
    },
];

export default function Bakeries() {
    return (
        <div className="bakeries">
            {bakeries.map((bakery, i) => (
                <div className="bakery" key={`bakery-${i}`}>
                    <img src={bakery.image} />
                    {bakery.photoCreditName && (
                        <span className="photo-credit">
                            Photo:{' '}
                            <a href={bakery.photoCreditUrl} target="_blank">
                                {bakery.photoCreditName}
                            </a>
                        </span>
                    )}
                    <a href={bakery.url || '#'} target="_blank">
                        <span className="name">{bakery.name}</span>
                    </a>
                </div>
            ))}

            <style jsx>{`
                .bakeries {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                .bakery {
                    padding: 2rem;
                }

                .bakery .name {
                    font-size: 110%;
                    margin: 1rem 0;
                }

                .bakery .photo-credit {
                    font-size: 70%;
                    display: block;
                }
                .bakery a {
                    color: darkslateblue;
                    text-decoration: none;
                }
                .bakery a:hover {
                    text-decoration: underline;
                }

                .bakery img {
                    width: 450px;
                    height: 450px;
                    border-radius: 4px;
                }

                @media (max-width: 900px) {
                    .bakeries {
                        grid-template-columns: 1fr;
                    }
                    .bakery {
                        padding: 2rem 0;
                    }
                }
            `}</style>
        </div>
    );
}

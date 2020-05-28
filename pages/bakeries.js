const bakeries = [];

for (var i = 0; i < 14; i++) {
    bakeries.push({
        name: 'Test Bakery',
        image: '/fake-bakery.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra erat diam, et pellentesque nunc iaculis et. Etiam accumsan ac felis finibus egestas. Nullam id felis eget urna vehicula tincidunt. Donec volutpat ligula et sem lobortis, a euismod ligula fringilla.',
    });
}

export default function Bakeries() {
    return (
        <div className="bakeries">
            {bakeries.map((bakery, i) => (
                <div className="bakery" key={`bakery-${i}`}>
                    <img src={bakery.image} />
                    <p className="name">{bakery.name}</p>
                    <p className="description">{bakery.description}</p>
                </div>
            ))}

            <style jsx>{`
                .bakeries {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                .bakery {
                    padding: 1rem;
                }

                .bakery .name {
                    font-size: 120%;
                    margin: 1rem 0;
                }

                .bakery img {
                    max-width: 400px;
                }

                @media (max-width: 900px) {
                    .bakeries {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}

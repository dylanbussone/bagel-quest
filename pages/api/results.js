import db from '../../lib/db';

export default async (req, res) => {
    const response = await db.query(`
        SELECT username, bagel_id, score
        FROM bagel_votes;
    `);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

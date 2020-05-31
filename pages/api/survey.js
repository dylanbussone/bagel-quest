import escape from 'sql-template-strings';
import db from '../../lib/db';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, bagelId, score, comment } = req.body || {};

        /*
        bagel_votes
            username
            bagel_id
            score
            comment
        */
        const response = await db.query(escape`
            INSERT INTO bagel_votes
            (username, bagel_id, score, comment)
            VALUES
            (${username}, ${bagelId}, ${score}, ${comment});
        `);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
};

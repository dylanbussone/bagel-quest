import escape from 'sql-template-strings';
import db from '../../lib/db';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { username, voteData } = req.body || {};

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
            (${username}, ${voteData[1].id}, ${voteData[1].score}, ${voteData[1].comment}),
            (${username}, ${voteData[2].id}, ${voteData[2].score}, ${voteData[2].comment}),
            (${username}, ${voteData[3].id}, ${voteData[3].score}, ${voteData[3].comment}),
            (${username}, ${voteData[4].id}, ${voteData[4].score}, ${voteData[4].comment}),
            (${username}, ${voteData[5].id}, ${voteData[5].score}, ${voteData[5].comment}),
            (${username}, ${voteData[6].id}, ${voteData[6].score}, ${voteData[6].comment}),
            (${username}, ${voteData[7].id}, ${voteData[7].score}, ${voteData[7].comment}),
            (${username}, ${voteData[8].id}, ${voteData[8].score}, ${voteData[8].comment}),
            (${username}, ${voteData[9].id}, ${voteData[9].score}, ${voteData[9].comment}),
            (${username}, ${voteData[10].id}, ${voteData[10].score}, ${voteData[10].comment}),
            (${username}, ${voteData[11].id}, ${voteData[11].score}, ${voteData[11].comment}),
            (${username}, ${voteData[12].id}, ${voteData[12].score}, ${voteData[12].comment}),
            (${username}, ${voteData[13].id}, ${voteData[13].score}, ${voteData[13].comment}),
            (${username}, ${voteData[14].id}, ${voteData[14].score}, ${voteData[14].comment});
        `);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
};

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
            (${username}, 1, ${voteData[1].score}, ${voteData[1].comment}),
            (${username}, 2, ${voteData[2].score}, ${voteData[2].comment}),
            (${username}, 3, ${voteData[3].score}, ${voteData[3].comment}),
            (${username}, 4, ${voteData[4].score}, ${voteData[4].comment}),
            (${username}, 5, ${voteData[5].score}, ${voteData[5].comment}),
            (${username}, 6, ${voteData[6].score}, ${voteData[6].comment}),
            (${username}, 7, ${voteData[7].score}, ${voteData[7].comment}),
            (${username}, 8, ${voteData[8].score}, ${voteData[8].comment}),
            (${username}, 9, ${voteData[9].score}, ${voteData[9].comment}),
            (${username}, 10, ${voteData[10].score}, ${voteData[10].comment}),
            (${username}, 11, ${voteData[11].score}, ${voteData[11].comment}),
            (${username}, 12, ${voteData[12].score}, ${voteData[12].comment}),
            (${username}, 13, ${voteData[13].score}, ${voteData[13].comment}),
            (${username}, 14, ${voteData[14].score}, ${voteData[14].comment}),
            (${username}, 15, ${voteData[15].score}, ${voteData[15].comment});
        `);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
};

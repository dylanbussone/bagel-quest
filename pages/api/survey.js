export default (req, res) => {
    if (req.method === 'POST') {
        console.log('api/survey!', req.body);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(req.body));
    }
};

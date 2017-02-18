module.exports = function (app) {
    app.get('/health-check', (req, res) => res.sendStatus(200));
    app.get('/users', (req, res) => {
        res.json([
                {name: 'John Doe'},
                {name: 'Jane Doe'}
            ]
        )
    });
};
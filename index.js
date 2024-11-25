const app = require('express')();
const port = 8080;
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

app.get('/films', (req, res) => {
    res.send(["Pulp Fiction", "Interstellar", "The Godfather"])
})

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {console.log(`Api on saadaval aadressil: http://localhost:${port}`);});
const app = require('./app');
const db = require('./mongoose');
db.init();

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

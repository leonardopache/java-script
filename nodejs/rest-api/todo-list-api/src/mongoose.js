const mongoose = require('mongoose');

module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb://localhost:27017/todo-api`
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
};
module.exports = (app) => {
    console.log('route');
    const user = require('../controller/userController');

    app.post('/users',user.create);
    console.log(user.create);
    app.post('/users/auth',user.getUser)
    app.delete('/users/:userName',user.delete);

    // app.post('/creditcard', BankAccount.add);
    // app.get('/creditcard/:user', BankAccount.get);
}
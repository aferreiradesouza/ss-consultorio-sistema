module.exports = (req, res, next) => {
    if (req.url === '/login') {
        setTimeout(() => {
            if (req.body.email !== 'arthur@ed.company' && req.body.senha !== '123') {
                res.status(422).send({
                    message: 'Não autorizado'
                });
            } else {
                next();
            }
        }, 2000);
        return;
    }

    if (req.url === '/busca') {
        console.log(req);
        console.log(res);
        setTimeout(() => {
            next();
        }, 2000);
        return;
    }

    next()
}
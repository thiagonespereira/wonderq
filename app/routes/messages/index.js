const express = require('express-promise-router');
const { check, validationResult } = require('express-validator');
const BadRequestError = require('../../utils/errors/bad-request-error');

const router = express({ mergeParams: true });

router.post('/produce', [
    check('message', 'Missing message information.'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new BadRequestError(`Invalid fields in body of request: ${JSON.stringify(errors)}`);
    // const users = await Users.query()
    //     .where('username', req.query.username)
    //     .first();

    // if (!users) {
    //     res.send({
    //         status: 'ok',
    //         availability: true,
    //     });
    // } else {
    res.send({
        status: 'ok',
        message: req.message,
    });
    // }
});

router.get('/consume', [], async (req, res) => {
    const message = 'MESSAGE';
    // const users = await Users.query()
    //     .where('email', req.query.email)
    //     .first();

    // if (!users) {
    //     res.send({
    //         status: 'ok',
    //         availability: true,
    //     });
    // } else {
    //     res.send({
    //         status: 'ok',
    //         availability: false,
    //     });
    // }
    res.send({
        status: 'ok',
        message,
    });
});

module.exports = router;

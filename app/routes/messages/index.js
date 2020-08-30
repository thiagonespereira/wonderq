const express = require('express-promise-router');
const { check, validationResult } = require('express-validator');
const BadRequestError = require('../../utils/errors/bad-request-error');
const Users = require('../../models/user');
const UserEntity = require('../../models/entities/user');
const Professionals = require('../../models/professional');
const ProfessionalEntity = require('../../models/entities/professional');
const ProfessionalsPerks = require('../../models/professional_perks');
const ProfessionalPerksEntity = require('../../models/entities/professional_perk');
const SendEmailService = require('../../services/email/send_email_using_template');

const router = express({ mergeParams: true });
const { generateSalt, encrypt } = require('../../utils/crypto');


router.post('/produce', [
    check('user', 'Missing user information.'),
    check('professional', 'Missing professional information.'),
    check('professionalPerks', 'Missing professional perks information.'),
], async (req, res) => {
    // const users = await Users.query()
    //     .where('username', req.query.username)
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
});

router.get('/consume', [], async (req, res) => {
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
});

module.exports = router;

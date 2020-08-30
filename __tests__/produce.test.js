const request = require('supertest');
const routes = require('../app/routes');

describe('/produce endpoint', () => {
    it('Send request with correct apiKey in body, and no message.', async () => {
        process.env.SERVICE_AUTH_KEY = 'SECRET';

        const res = await request(routes)
            .post('/produce')
            .send({
                apiKey: 'SECRET',
            });

        expect(res.status).toEqual(400);
        expect(res.text).toEqual('No message information.');
    });
});

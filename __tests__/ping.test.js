const request = require('supertest');
const routes = require('../app/routes');

describe('/ping endpoint', () => {
    it('Send request without apiKey in body.', async () => {
        const res = await request(routes)
        .post('/ping');

        expect(res.status).toEqual(403);
        expect(res.text).toEqual('No api key.');
    });

    it('Send request with invalid apiKey in body.', async () => {
        const res = await request(routes)
        .post('/ping')
        .send({
            'apiKey': 'Invalid Key',
        });

        expect(res.status).toEqual(401);
        expect(res.text).toEqual('Invalid api key.');
    });

    it('Send request with correct apiKey in body.', async () => {
        process.env.SERVICE_AUTH_KEY = 'SECRET';
        
        const res = await request(routes)
        .post('/ping')
        .send({
            'apiKey': 'SECRET',
        });

        expect(res.status).toEqual(200);
        expect(res.text).toEqual('pong');
    });
});
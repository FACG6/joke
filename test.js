const test = require('tape');
const supertest = require('supertest');
const router = require('./src/router'); 

test('Home route returns a status code of 200', (t) => {
    supertest(router)
    .get('/')
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
        t.error(err);
        t.equal(res.statusCode, 200, 'Should return status 200');
        t.end();
    });
});

test('loss  route', (t) => {
    supertest(router)
    .get('/hhhhjgfd')
    .expect(404)
    .expect('content-type', /html/)
    .end((err, res) => {
        t.error(err);
        t.equal(typeof(res),'object','should retun html file')
        t.end();
    });
});

test('result route result', (t) => {
    supertest(router)
    .get('/result')
    .expect(200)
    .expect('content-type', /json/)
    .end((err, res) => {
        t.error(err);
        t.deepEqual(typeof res,'object', 'should return an object');
        t.end();
    });
});

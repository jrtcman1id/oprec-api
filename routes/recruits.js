const {Router} = require('express');
const pool = require('../db');
const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM recruits ORDER BY id ASC', (err, res) => {
        if(err){return next(err);}
        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const {id} = request.params;

    pool.query('SELECT * FROM recruits WHERE id = $1', [id], (err, res) => {
        if(err){return next(err);}

        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
    const {full_name, gender, email, phone_number, major, birth_place, birth_date, residence_address, motivation} = request.body;

    pool.query(
        'INSERT INTO recruits (full_name, gender, email, phone_number, major, birth_place, birth_date, residence_address, motivation) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);', 
        [full_name, gender, email, phone_number, major, birth_place, birth_date, residence_address, motivation],
        (err, res) => {
            if(err){return next(err);}
            // response.redirect(`/recruits`);
            pool.query('SELECT * FROM recruits ORDER BY id DESC LIMIT 1', (err, res) => {
                if(err){return next(err);}
                response.json(res.rows);
            });
        });
});

module.exports = router;
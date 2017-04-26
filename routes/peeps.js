import express from 'express'
import pool from '../lib/db'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    pool.query('SELECT * FROM people', (req, data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

router.route('/name').get((req, res) =>  {
    const result = [];
    pool.query('SELECT name FROM people', (req, data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

router.route('/comment').get((req, res) =>  {
    const result = [];
    pool.query('SELECT comment FROM people', (req, data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

export default router
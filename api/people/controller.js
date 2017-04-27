import express from 'express'
import {getAll, getNames, getComz} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAll().then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

router.route('/name').get((req, res) =>  {
    const result = [];
    getNames().then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

router.route('/comment').get((req, res) =>  {
    const result = [];
    getComz().then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    })
});

export default router
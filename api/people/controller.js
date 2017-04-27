import express from 'express'
import {getAll, getNames, getComz} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAll(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/name').get((req, res) =>  {
    const result = [];
    getNames(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/comment').get((req, res) =>  {
    const result = [];
    getComz(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

export default router
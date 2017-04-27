import express from 'express'
import {getAllChocobos, getChocoboNames, getChocoboColors} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAllChocobos(req).then((data) => {
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
    getChocoboNames(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/colors').get((req, res) =>  {
    const result = [];
    getChocoboColors(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

export default router
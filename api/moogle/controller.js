import express from 'express'
import {getAllmoogles, getMoogleNames, getMoogleComz} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAllmoogles(req).then((data) => {
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
    getMoogleNames(req).then((data) => {
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
    getMoogleComz(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

export default router
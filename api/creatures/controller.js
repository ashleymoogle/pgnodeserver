import express from 'express'
import {getAllCreatures, getCreature, getCreatureFriends} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAllCreatures(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/all').get((req, res) =>  {
    const result = [];
    getAllCreatures(req).then((data) => {
        Promise.all(data.rows.map((row, i) => {
            result.push(row)
            return getCreatureFriends(i+1).then((data) => {
                result[i].friends = []
                data.rows.map((row) => {
                    result[i].friends.push(row)
                })
            }).catch((err) => {
                console.log(err)
            })
        })).then(() => {
            res.json(result);
        })
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/:id').get((req, res) =>  {
    const result = [];
    getCreature(req.params.id).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/friends/:id').get((req, res) =>  {
    const result = [];
    getCreature(req.params.id).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        })
        getCreatureFriends(req.params.id).then((data) => {
            result[0].friends = []
            data.rows.map((row) => {
                result[0].friends.push(row)
            })
            console.log(result)
            res.json(result);
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
});

export default router
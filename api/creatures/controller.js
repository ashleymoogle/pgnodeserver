import express from 'express'
import _ from 'lodash'
import {getAllCreatures, getCreature, getCreatureFriends} from './model'

const router = express.Router()

router.route('/').get((req, res) =>  {
    const result = [];
    getAllCreatures(req).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        });
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/all').get(async (req, res) =>  {
    try {
        const creatures = await getAllCreatures(req);
        const result = await Promise.all(creatures.rows.map(async (elem) => {
            const friends = await getCreatureFriends(elem.id)
            return {...elem, friends: friends.rows}
        }));
        res.json(result);
    } catch(e) {
        res.json(e);
    }
});

router.route('/:id').get((req, res) =>  {
    const result = [];
    getCreature(req.params.id).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        });
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
});

router.route('/friends/:id').get(async (req, res) =>  {
    try {
        const result = [];
        const id = req.params.id;
        const creature = await getCreature(id);
        creature.rows.map((row) => {
            result.push(row);
        });
        result[0].friends = [];
        const friends = await getCreatureFriends(id);
        friends.rows.map((row) => {
            result[0].friends.push(row)
        });
        console.log(result);
        res.json(result);
    }catch(e){
        res.json(e)
    }
    const result = [];
    getCreature(req.params.id).then((data) => {
        data.rows.map((row) => {
            result.push(row)
        });
        getCreatureFriends(req.params.id).then((data) => {
            result[0].friends = [];
            data.rows.map((row) => {
                result[0].friends.push(row)
            });
            console.log(result);
            res.json(result);
        }).catch((err) => {
            console.log(err)
        })
    }).catch((err) => {
        console.log(err)
    })
});

export default router

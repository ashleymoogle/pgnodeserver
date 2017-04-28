import express from 'express'
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
        const result = [];
        const creatures = await getAllCreatures(req);
        await Promise.all(creatures.rows.map(async (row, i) => {
            result.push(row);
            result[i].friends = [];
            let friends = await getCreatureFriends(i+1);
            friends.rows.map((row) => {
                result[i].friends.push(row)
            })
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
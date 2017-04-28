import pool from '../../lib/db'

export const getAllCreatures = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM creature', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getCreature = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM creature WHERE id = ${id}`, (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getCreatureFriends = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT friends.creature_id, creature.name, friends.type, friends.friend_id, (CONCAT(moogle.name,chocobo.name)) as name
                    FROM friends 
                    INNER JOIN creature ON creature.id = friends.creature_id
                    LEFT JOIN moogle ON moogle.id = friends.friend_id and friends.type = 'moogle'
                    LEFT JOIN chocobo ON chocobo.id = friends.friend_id and friends.type = 'chocobo'
                    WHERE creature.id = ${id}`,
            (err, data) => {
                if(err)
                    reject(err)
                resolve(data)
            })
    })
}
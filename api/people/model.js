import pool from '../../lib/db'

export function getAll(req){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export function getNames(req){
    return new Promise((resolve, reject) => {
        pool.query('SELECT name FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export function getComz(req){
    return new Promise((resolve, reject) => {
        pool.query('SELECT comment FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}
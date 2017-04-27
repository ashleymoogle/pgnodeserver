import pool from '../../lib/db'

export function getAll(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export function getNames(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT name FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export function getComz(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT comment FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}
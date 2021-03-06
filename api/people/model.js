import pool from '../../lib/db'

export const getAll = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getNames = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, name FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getComz = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, comment FROM people', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}
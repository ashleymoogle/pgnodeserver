import pool from '../../lib/db'

export const getAllmoogles = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM moogle', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getMoogleNames = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, name FROM moogle', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getMoogleComz = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, comment FROM moogle', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}
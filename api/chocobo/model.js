import pool from '../../lib/db'

export const getAllChocobos = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM chocobo', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getChocoboNames = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, name FROM chocobo', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}

export const getChocoboColors = (req) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, color FROM chocobo', (err, data) => {
            if(err)
                reject(err)
            resolve(data)
        })
    })
}
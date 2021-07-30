const db = require('./config')

const getUsers = (request, response) => {

    db.pool.query('SELECT * from books', (error, results) => {

        if (error) {

            if (error.toString().includes("password authentication failed")) {
                response.status(401).send(`password authentication failure`)
                console.log(error.toString())
                return
            }
            

        } else {
            response.status(200).json(results.rows)
        }


    })

}

const getUserById = (request, response) => {

    const id = parseInt(request.params.id)

    db.pool.query('SELECT * from books where id = $1 ',[id] ,(error, results) => {

        if (error) {

            if (error.toString().includes("password authentication failed")) {
                response.status(401).send(`password authentication failure`)
                console.log(error.toString())
                return
            }
            

        } else {
            response.status(200).json(results.rows)
        }


    })

}

const createUser = (request, response) => {

    const author = request.body.author
    const title = request.body.title
    db.pool.query('INSERT INTO books(author,title) VALUES ($1,$2) ', [author, title], (error, results) => {

        //console.log(results.rows)
        if (error) {

            if (error.toString().includes("duplicate key value violates unique constraint")) {
                response.status(409).send(`duplicate key value violates unique constraint`)
                console.log(error.toString())
                return
            }
            console.log(error.toString())
            response.status(400).send(`Bad Request`)

        } else {

            response.status(201).send(`User successfully added `)
        }


    })

}

module.exports = {
    getUsers,
    createUser,
    getUserById
}
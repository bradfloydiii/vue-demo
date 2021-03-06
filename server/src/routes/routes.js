module.exports = (router, sequelize) => {

    router.get('/status', (req, res) => {
        res.status(200).send('you called the status route')
    })
    
    router.post('/register', (req, res) => {
        res.send(`User ${req.body.email} was registered.`)
    })
    
    router.post('/callStoredProcedure', (req, res) => {
        res.send(`User ${req.body.email} was registered.`)
    })

    router.post('/addUser', (req, res) => {
        sequelize.query('SELECT zz_insert_rec(:fname, :lname)', { replacements: { fname: req.body.firstname, lname: req.body.lastname } })
        .then(data => res.status(200).send({'firstname': req.body.firstname, 'lastname': req.body.lastname}))
    })

    router.get('/purchase/orders', (req, res) => {
        console.log('/purchase/orders')
        sequelize.query('SELECT * FROM getPurOrd()', {type: sequelize.QueryTypes.SELECT})
        .then(data => {
            res.status(200).send(JSON.stringify(data))
        })
    })
    
    router.get('/getUser', (req, res) => {
        
        sequelize.query('SELECT * FROM getfoo()', {type: sequelize.QueryTypes.SELECT})
        .then(data => {
            let result = [];
            for(let i=0; i<data.length; i++) {
                console.log(i)
                result.push(data[i].module + ' ' + data[i].fk_user_id) 
            }
            res.status(200).send(result)
        })
        .error(err => res.json(err))
    
    })
    
}
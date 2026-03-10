const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('./people')

router.get('/',)
router.post('/', )
router.post('/postman', )
router.put('/:id', )
router.delete('/:id', )

module.exports = router
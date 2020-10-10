const express = require('express')
const { nanoid } = require('nanoid')
const router = express.Router()

const members = require('../../Members')

// Get all members
router.get('/', (req, res) =>{
    res.json(members)
})



module.exports = router
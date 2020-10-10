const express = require('express')
const { nanoid } = require('nanoid')
const router = express.Router()

const members = require('../../Members')

// Get all members
router.get('/', (req, res) =>{
    res.json(members)
})

// Get single member
router.get('/:id', (req, res)=>{
    const found = members.some(member => member.id === req.params.id)

    if(found){
        res.json(members.filter(member => member.id === req.params.id))
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id} is found`
        })
    }
})

// Creating a member
router.post('/', (req, res)=>{
    const newMember = {
        id: nanoid(4),
        name: req.body.name,
        email: req.body.email,
        status: true
    }

    if(!newMember.name || !newMember.email){
        res.status(400).json({
            msg: 'Please make sure you include both Name and Email'
        })
    }
    members.push(newMember)
    console.log(`New member successfully created with id: ${newMember.id}`)
    res.json({ msg: `${newMember.name} member is created`, members})
})

// Updating a member
router.put('/:id', (req, res)=>{
    const found = members.some(member => member.id === req.params.id)

    if(found){
        const updateMember = req.body
        members.forEach(member => {
            if(member.id === req.params.id){
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email
                console.log('Member updated')
                res.json({ msg: 'Member updated', member})
            }
        })
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id} found`
        })
    }
})

// Deleting a member
router.delete('/:id', (req, res)=>{
    const found = members.some(member => member.id === req.params.id)
    if(found){
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== req.params.id)  
        })
    } else {
        res.status(400).json({
            msg: `No member with the id of ${req.params.id} is found`
        })
    }
})

module.exports = router
const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/adduser', (req, res) => {
    let newuser = req.body;
    req.users.push(newuser);
    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(req.users, null, 2), (err) => {
        if (err) {
            console.log('Failed to write', err);
            return res.status(500).send('Failed to add user');
        }
        console.log('User saved');
        res.send('User added successfully');
    });
    res.send('done');
})

module.exports = router;
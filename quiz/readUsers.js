const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
        return {id: user.ikd, username: user.username};
    });
    res.send(usernames);
})
router.get('/username/:name', (req, res) => {
    let name = req.params.name;
    let user_with_name = req.users.filter(function(user) {
        return user.username === name;
    });
    if (user_with_name.length) {
        res.json(user_with_name);
    } else {
        res.status(404).send('User not found');
    }
});


module.exports = router;
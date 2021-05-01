const express = require('express');
const signupRouter = express.Router();

function router(nav2){
    signupRouter.get('/', function(req, res){
        res.render('signup', 
        {
            nav2,
            title: 'Library'
        });
    });

    return signupRouter;
}

module.exports = router;
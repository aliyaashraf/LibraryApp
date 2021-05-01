const express = require('express');
const loginRouter = express.Router();

function router(nav3){
    loginRouter.get('/', function(req, res){
        res.render('login', 
        {
            nav3,
            title: 'Library'
        });
    });

    return loginRouter;
}

module.exports = router;
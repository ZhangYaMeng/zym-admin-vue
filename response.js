var express = require('express')

var appData = require('./db.json');
var router = express.Router()

var resJson = function(data) {
    return function(req, res) {
        res.json({
            status: 200,
            success: true,
            msg: "操作成功",
            data: data
        });
    }
}

router
    .get("/login", resJson(appData.login))
    .get("/menu", resJson(appData.menu))


module.exports = router
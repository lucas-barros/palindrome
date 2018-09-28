var express = require('express');
var router = express.Router();
var isPalindrome = require('../resources/palindrome');


router.get('/:string', function( req, res ){
    var string = req.params.string;
    res.sendStatus( isPalindrome( string ) ? 200 : 400 );
});


module.exports = router;

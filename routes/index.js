var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

global.trip = [
    {
        img: 'images/pool.jpg',
        name: 'GRAND TURKEY',
        country: 'TURKEY',
        duration: '8 Day',
        price: '$2,000'
    },
    {
        img: 'images/tr2.jpg',
        name: 'UK TRIP',
        country: 'ENGLAND',
        duration: '13 Day',
        price: '$5,000'
    },
    {
        img: 'images/tr3.jpg',
        name: 'GRAND ITALY',
        country: 'ITALY',
        duration: '8 Day',
        price: '$3,000'
    },
    {
        img: 'images/tr4.jpg',
        name: 'Swiss Alps Trip',
        country: 'Austria',
        duration: '10 Day',
        price: '$6,000'
    },
    {
        img: 'images/tr5.jpg',
        name: 'Grand Spain Madrid',
        country: 'Spain',
        duration: '8 Day',
        price: '$3,000'
    },
    {
        img: 'images/tr6.jpg',
        name: 'East Europe',
        country: 'Czech',
        duration: '10 Day',
        price: '$4,000'
    }
];

global.feature = [
    {
        img: 'images/trav1.jpg',
        name: 'GRAND THAILAND',
        country: 'THAILAND',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/trav2.jpg',
        name: 'GRAND TURKEY',
        country: 'TURKEY',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        img: 'images/trav3.jpg',
        name: 'GRAND ITALY',
        country: 'ITALY',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

global.blog = [
    {
        img:'images/fo2.jpg',
        title:'EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT',
        date:'November 10, 2015',
        content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        img:'images/fash10.jpg',
        title:'EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT',
        date:'November 10, 2015',
        content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        img:'images/build4.jpg',
        title:'EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT',
        date:'November 10, 2015',
        content:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

global.review = [
    {
        img:'images/face1.jpg',
        user:'JOE DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        img:'images/face2.jpg',
        user:'JESSICA DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
	{
        img:'images/face3.jpg',
        user:'ANNA DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
	{
        img:'images/face4.jpg',
        user:'TINA DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
	{
        img:'images/face5.jpg',
        user:'BRITNEY DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
	{
	    img:'images/face6.jpg',
        user:'SIMONA DOE',
        comment:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

router.get('/api/trips', function (req, res) {
    res.send(global.trip);
});

router.get('/api/features', function (req, res) {
    res.send(global.feature);
});

router.get('/api/blogs', function (req, res) {
    res.send(global.blog);
});

router.get('/api/reviews', function (req, res) {
    res.send(global.review);
});

module.exports = router;

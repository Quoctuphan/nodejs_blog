const Course = require('../models/Course')

//Home/ search
class SiteController {
    async index(req, res) {
        try {
           const courses = await Course.find({})
                 res.json(courses)
        } catch (error) {
            res.status(400).json({err: 'message'})
        }
    }
        // res.render('home');
    
    search(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.send('search');
    }
}
module.exports = new SiteController();

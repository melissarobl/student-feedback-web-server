const express = require('express')
const router = express.Router()
// router object figures out what code to run in response to a request.
// typically based on the URL, and the method (GET, POST...)


// responds to get request to home page
//request, response, next
router.get('/', function(req, res, next) {
    // name of Handlebars File - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Melissa',
        timePageLoadedAt: new Date(),
    })

}) //get request to the home page

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) {
    //access form data
    //const formData = req.query  //for a GET request - read the URL query
    const formData = req.body  // for a POST request
    console.log(formData)

    // todo - save to a database
    // automatically email someone when feedback has been submitted
    // save all to database for another program to read what is submitted every day

    res.render('thank_you', {
        name: formData['student-name'],
        email: formData['student-email'],  //dashes aren't allowed, so have to put name in []
        comments: formData.comments,  //name didn't have dashes, so can use this format
        currentStudent: formData['current-student']
    })
})

// return router object to whatever else needs file
module.exports = router //this line needs to be the very last line!



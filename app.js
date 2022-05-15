const mongoose = require('mongoose');
const express = require('express');

const User = require('./models/user');
const Group = require('./models/group');
const Courses = require('./models/courses');


try{
    app = express();

    app.set('view engine', 'ejs');
    app.set('views', 'views');
    app.use(express.static('public'))
    //EndPoint for Explore
    app.get('/explore',function(req,res){
        let freeList = [];
        let premiumList = [];
        let result ={};
        Courses.find({premium:false}).lean().then(course =>{
            freeList = course;
            return freeList;
        }).then(freeList =>{
            Courses.find({premium:true}).lean().then(course =>{
                premiumList = course;
            });
            return premiumList;
        }) .then(premiumList =>{
            result["free"] = freeList;
            result["premium"] = premiumList;
            console.log(result);
            return result;
        }).then((result) =>{
            res.render('explore', {
                pageTitle: 'Explore Page',
                path: '/explore',
                result: result
            });
        });
    });

    // endpoint for my-courses
    app.get('/course',function(req,res){
        //const username = req.username;
        let enrolledList = [];
        let result ={};
        const userLoggedin = null;
        const username = "narendersingh";
        console.log("Username in req is"+username);
        User.find({username:username}).lean().then(user=>{
            console.log(user);
            console.log(user[0].coursesEnrolled);
            enrolledList = user[0].coursesEnrolled;
            console.log(enrolledList);
            result["enrolled"] = enrolledList;
            return result;
        }).then((result) =>{
            res.render('course', {
                pageTitle: 'My-Courses',
                path: 'course',
                result: result["enrolled"]
            });
        });
    });

        // endpoint for my-courses
        app.get('/group',function(req,res){
            const username = "narendersingh";
            let enrolledList = [];
            let result ={};
            User.find({username:username}).lean().then(user=>{
                console.log(user);
                enrolledList = user[0].groupEnrolled;
                result["groupEnrolled"] = enrolledList;
                console.log(result);
                return result;
            }).then((result) =>{
                res.render('group', {
                    pageTitle: 'My-Group',
                    path: '/group',
                    result: result["groupEnrolled"]
                });
            });
        });
        
    mongoose.connect('mongodb+srv://narender:naveen7@cluster0.ldked.mongodb.net/ImarticusDB?retryWrites=true&w=majority').then(result =>{
        console.log('connected to database sucessfully');
        app.listen(8088);
    }).catch(err=>{
        console.log(err);
    });
}catch(err){
    console.log(err);
}

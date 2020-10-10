const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require ("../../config/middleware/authMiddleware");
const userController = require ("../../controllers/userController");

router.post("/login", passport.authenticate("local", {

    failureRedirect: "/api/users/unauthorized",
    failureFlash : true

}),
 function (req, res, next) {

    console.log("sign in successful");
    console.log(req.user);
    res.json({

        user: req.user,
        loggedIn: true

    });

});


router.post("/signup", function(req, res, next) {

    db.User.findOne({username: req.body.username}, function(err, user) {

        if (err) throw err;
        if (user) {

            console.log("user already exists");
            return res.json("user already exists");

        }

        if (!user) {

            let newUser = new db.User({
                username: req.body.username,
                password: req.body.password
                
            })

            newUser.password = newUser.generateHash(req.body.password);
            newUser.save(function(err) {

                if (err) throw err;
                console.log("user saved!");
                res.redirect(307, "/api/users/login");

            });

        }

    });

});


router.get("/unauthorized", function(req, res, next) {

    let message = req.flash("error")[0];
    setTimeout(function() {

        res.json({

            message: message,
            loggedIn: false

        });
    }, 100);

});

router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {

    res.json({

        user: req.user,
        loggedIn: true

    });

});


router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {

    res.json("User logged out successfully");

});


router.get("/admin", authMiddleware.isAdmin, function(req, res, next) {

    res.json({

        user: req.user,
        loggedIn: true

    });

});


router.post("/userScores/:id", function(req,res,next) {

    console.log("/api/userScores/:id");
    console.log(req.body);
    if (!req.body.userid && !req.params.id) {
        
        console.log("NO USER ID");
        return res.end();
        
    }

});

    

router.route("/userGames/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);



module.exports = router;
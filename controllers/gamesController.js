const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db.Game
      .find(req.query)
      .sort({ gameGroup: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  findById: function(req, res) {

    db.Game
    .findById(req.params.id)
    .populate("cardArray")
    .then(dbGame => {
      console.log(dbGame);
      res.json(dbGame);

    })

    .catch(function(err) {

      res.json(err);

    });
    
  },
  create: function(req, res) {

    console.log("create game: ", req.body)
    let gameID = "";
    db.Game
      .create({

        gameGroup: req.body.gameGroup,
        audience: req.body.audience,
        gameName: req.body.gameName,
        gameCategories: req.body.gameCategories,
        gameCategoryType: req.body.gameCategoryType,
        cardRulesType: req.body.cardRulesType,
        
      })

      .then((game) => {

        gameID = game._id
        console.log("game id: ", game._id)
        return db.User.findOneAndUpdate({ _id: req.body.userid }, { $push: { gameArray: game._id } }, { new: true })
      
    })

      .then(user => res.json(gameID))
      .catch(err => res.status(422).json(err));
      
  },

  update: function(req, res) {

    db.Game
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },

  remove: function(req, res) {

    db.Game
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  }
  
};
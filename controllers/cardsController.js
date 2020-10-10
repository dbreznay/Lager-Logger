const db = require("../models");

module.exports = {

  findAll: function(req, res) {

    db.Card
      .find(req.query)
      .sort({ cardName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  findById: function(req, res) {

    db.Card
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  create: function(req, res) {

    db.Card
      .create({

        cardName: req.body.cardName,
        src: req.body.src,
        rules: req.body.rules,

      })

      .then((card) => {

      cardAdded = card;
      console.log("Card Object: ", cardAdded);
      return db.Game.findOneAndUpdate({ _id: req.body.game_id }, { $push: { cardArray: card._id } }, { new: true })
      
    })

      .then(game => res.json(cardAdded))
      .catch(err => res.status(422).json(err));

  },

  update: function(req, res) {

    db.Card
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },

  remove: function(req, res) {

    db.Card
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  }

};
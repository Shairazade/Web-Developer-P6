const Sauce = require('../models/sauces');

exports.createSauce = (req, res, next)=>{
    
    delete req.body._id;
    const sauce = new Sauce({
      ...req.body
    });
    sauce.save()
    .then(() => res.status(201).json({ message: 'Sauce ajoutée !'}))
    .catch(error => res.status(400).json({ error }));
  }

exports.modifySauce =  (req, res, next) =>{
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
    .catch(error => res.status(400).json({ error }));
  
  }

exports.deleteSauce =  (req, res, next) =>{
    Sauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Sauce suprimée !'}))
    .catch(error => res.status(400).json({ error }));
  
  }

exports.getOneThing =  (req, res, next) =>{
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(400).json({ error }));
  
  }

exports.getAllThing = (req, res, next)=>{
    Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
  }
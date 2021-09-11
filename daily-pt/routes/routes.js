const express = require("express");
const UserModel = require("../model/UserModel");
const userModel = require('../model/UserModel');

const router = express.Router();

// Get all the Users :
router.get('/', async (req,res) => {
  try{
    const users = await userModel.find();
    res.json(users)

  }catch(err){
    console.log({message:err})
  }
});

// Created the Users :
router.post("/", (req, res) => {
  const user = new UserModel({
    title:req.body.title,
    description:req.body.description
  });
  user.save().then(data=>res.send(data)).catch(err => console.log(err, 'failed to save to the database'));
});

// Get individual user by userID
router.get('/:userId', async (req, res) => {
  try{
    const users = await UserModel.findById(req.params.userId);
    res.json(users);
  }catch(err){
    res.json({message:err});
  }
});

// Update the User
router.patch('/:userId', async (req, res)=>{
  try{
    const updateUser = await UserModel.updateOne({_id:req.params.userId},{$set:{title:req.body.title, description:req.body.description}});
    res.json(updateUser);
  }catch(err){
    res.json({message:err});
  }
});

// Delete the Users
router.delete('/:userId', async (req, res) => {
  try{
    const deleteUser = await UserModel.remove({_id:req.param.userId});
    res.json(deleteUser);
  }catch{
    req.json({message:err});
  }
});


module.exports = router;

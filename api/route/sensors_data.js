const express = require('express');
const router = express.Router();
const SensorData = require('../model/sensorData');
const mongoose = require('mongoose');

const SensorDataUrl = "http://127.0.0.1:3000/data/";

 router.get('/',(req,res,next)=>{
   SensorData.find().exec().then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
   }).catch(err =>{
       console.log(err);
       res.status(500).json({
           error:err
       });
   });
 });

//  Post data
  router.post('/', (req, res, next) => {
      const sensordata = new SensorData({
          _id :new mongoose.Types.ObjectId(),
          humidity: req.body.humidity,
          temperature: req.body.temperature,
          moisture: req.body.moisture
      });
      sensordata.save().then(result =>{
          console.log(result);
          res.status(201).json({
              aboutData:{
                  humidity: result.humidity,
                  temperature: result.temperature,
                  moisture: result.moisture,
                  _id:result._id,
                  request:{
                      type:"GET",
                      url: SensorDataUrl + result._id
                  }
              }
          });
      }).catch(err => console.log(err));
  });

  

  module.exports = router;

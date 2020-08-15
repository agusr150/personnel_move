const {Personnel} = require('../models')
// const { Op } = require("sequelize")


class UserControl {
    static create(req, res){
        console.log('masuk post')
        let newData={
            passport_no: req.body.passport_no,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            location: req.body.location
        }
        console.log(newData,"---")
        Personnel.create(newData)
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            res.status(500).json('error')
        })
    }

    static show(req, res){
        Personnel.findAll()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json('error')
        })
    }

    static showOne(req, res){
        Personnel.findOne({
            where: {id: req.params.id}
        })
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(500).json('error')
        })
    }

    static edit(req, res){
        Personnel.update(req.body,{
            where: {id: req.params.id}
        })
        .then(data=>{
            res.status(200).json('data has been updated')
        })
        .catch(err=>{
            res.status(500).json('error')
        })
    }

    static delete(req, res){
        Personnel.destroy({
            where: {id: req.params.id}
        })
        .then(data=>{
            res.status(200).json('data has been deleted')
        })
        .catch(err=>{
            res.status(500).json('error')
        })
    }

}

module.exports = UserControl
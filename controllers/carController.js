const boom = require('express-boom')
const Car = require('../models/Car')

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find()
        return cars
    } catch (err) {
        throw boom.boomify(err)
    } 
}

exports.getSingleCar = async (req, res) => {
    try {
        const id = req.params.id
        const car = Car.findById(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.addCar = async (req, res) => {
    try {
        const car = new Car(req.body)
        return car.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = req.body
        const { ...updateData } = car
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findByIdAndRemove(id)
        return car
    } catch (err) {
        throw boom.boomify(err)
    }
}

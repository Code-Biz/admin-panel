const servicesModel = require('../models/services-model');

const services = async (req, res) => {
    try {
        const servicesFound = await servicesModel.find();
        if (!servicesFound) {
            res.status(404).json({ msg: "No Services Found...!" });
        }
        res.status(200).json({ "msg": servicesFound });
    } catch (error) {
        console.log(`services: ${error}`);

    }
};


module.exports = services;
const dataModel = require('../models/data');

module.exports = {

    async registerCount(request, response) {
        const { cars } = request.body;

        if(!cars) return response.status(400).send({error: 'properties missing'});

        const date = new Date();

        await new dataModel({
            time: {
                day: date.getDate(),
                month: (date.getMonth()+1),
                year: date.getFullYear(),
                hours: date.getHours(),
                minutes: date.getMinutes()
            },
            vehichleCount: cars
        }).save();

        return response.status(200).end();
    },

    async getByDay(request, response) {
        const { day, month, year } = request.query;

        if(!day || !month || !year) return response.status(400).send({error: 'properties missing'});

        const data = await dataModel.find({
            ['time.day']: day,
            ['time.month']: month,
            ['time.year']: year
        });
        
        return response.status(200).send(data);
    }
}

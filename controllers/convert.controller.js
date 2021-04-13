import { converter } from '../utils/helpers';
var funcs = require('../utils/helpers.js');
import fs from 'fs';


const controller = {};

// We return the SSE for the saved number
controller.convertNumber = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(function() {
        const num = fs.readFileSync('./public/tmp', {
            encoding:'utf8',
            flag:'r'
        });

        res.write("data: " + funcs._test.converter(num) + '\n\n');
    }, 1000);
};

// We save the number in this controller method
controller.saveNumber = async (req, res) => {
    const num = req.query.num;
    fs.writeFileSync("./public/tmp", num);
    res.status(200).json({})
};


export default controller;

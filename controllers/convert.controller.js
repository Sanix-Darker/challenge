import { sendSSE } from '../utils/helpers';
import logger from '../utils/logger';


const controller = {};

// We return the SSE for the saved number
controller.convertNumber = async (req, res) => {
    sendSSE(req, res);
};

// We save the number
controller.saveNumber = async (req, res) => {
    const num = req.query.num;
    fs.writeFileSync("./public/tmp", num);
};


export default controller;

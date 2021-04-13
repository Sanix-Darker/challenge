import { converter } from '../utils/helpers';

const controller = {};

controller.getNumber = async (req, res) => {
    const num = req.query.num;
    try {
        const result = converter(num);
        res.json(count);
    } catch (err) {
        logger.error(`${DEV_FINDALL_FAILED} factories- ${err}`);
        res.status(400).json({ error: `${PROD_FINDALL_FAILED} factories` });
    }
};

export default controller;

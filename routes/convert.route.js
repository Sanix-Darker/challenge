import controller from '../controllers/convert.controller';

const routes = (router) => {
    const prefix = `${process.env.API_BASE}convert`;

    // The route for convertion
    router.get(`${prefix}`, (req, res) => {
        controller.getNumber(req, res);
    });
};

export default routes;

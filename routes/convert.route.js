import controller from '../controllers/convert.controller';

const routes = (router, raw) => {

    // The route for convertion
    router.get(`/event`, (req, res) => {
        controller.convertNumber(req, res, );
    });

    router.get(`/number`, (req, res) => {
        controller.saveNumber(req, res, );
    });

};

export default routes;

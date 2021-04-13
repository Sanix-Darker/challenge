// All routes for home.route

/**
 *
 * @param {*} router 
 */
const routes = (router) => {
    const prefix = `${process.env.API_BASE}`;

    // The route for convertion
    router.get(`${prefix}`, (req, res) => {
        res.sendFile('public/index.html');
    });
};

export default routes;

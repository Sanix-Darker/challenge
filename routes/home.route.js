// All routes for home.route

/**
 *
 * @param {*} router
 */
const routes = (router) => {
    const prefix = `/`;

    // The route for convertion
    router.get(`${prefix}`, (req, res) => {
        res.sendFile('public/index.html');
    });
};

export default routes;

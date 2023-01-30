
const homeController = (req, res) => {
    res.render('index', {'name' : 'Prince', 'age' : 22});
}

export default homeController;
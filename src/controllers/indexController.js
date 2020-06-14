const indexController = {}

indexController.renderIndex = (req, res) => {
    res.render('index.html')
}

indexController.renderAbout = (req, res) => {
    res.render('about.html')
}

module.exports = indexController
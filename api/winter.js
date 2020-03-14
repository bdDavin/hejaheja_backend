const getGames = require('../scrapers/wintersportScraper')

module.exports = async function (req, res) {
    var baseUrl = process.env.BASE_URL
    try {
        const winterGames = await getGames(baseUrl + 'skidor')
        res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
        res.send(winterGames)
    } catch (error) {
        if (error.name === 'empty') {
            res.statusCode = 404
            res.send('Response empty')
        } else {
            res.statusCode = 500
            res.send('Server error')
        }   
    }
}
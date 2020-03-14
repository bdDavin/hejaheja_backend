const getGames = require('../scrapers/swedenScraper')

module.exports = async function (req, res) {
    var baseUrl = process.env.BASE_URL
    try {
        const swedenGames = await getGames(baseUrl + '?s=sverige')
        res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
        res.send(swedenGames)
    } catch (error) {
        if (error.name === 'empty') {
            res.statusCode = 404
            res.send('Response empty')
        } else {
            res.statusCode = 500
            res.send(error.message)
        }   
    }
}
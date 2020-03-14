const getGames = require('../scraper')
const parse = require('url-parse')

module.exports = async function (req, res) {
    var baseUrl = 'https://www.tvmatchen.nu/'
    const search = '?s='
    var { s } = parse(req.url, true).query
    if (s === undefined || s.length == '') {
        res.statusCode = 400
        res.send('Missing "s" query')
        return
    }
    if (s !== 'skidor') {
        baseUrl = baseUrl + search
    }
    try {
        const games = await getGames(baseUrl + s)
        res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
        res.send(games)
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
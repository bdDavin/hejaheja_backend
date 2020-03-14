const cheerio = require('cheerio')
const { parsingChannel, parsingSportType, getDateFromString } = require('../types')
const getHTML = require('../browser')

async function parseHTML(html) {
    try {
        const $ = cheerio.load(html)
        const matches = []
        $('#matches > .day').each((i, day) => {
            let date = day.attribs['data-hash']
            $(day.lastChild.children).each((i, match) => {
                var time = ""
                var sportType = ""
                var opponent = ""
                var league = ""
                var channels = []
                if (match.type === 'tag') {
                    $(match.children).each((i, child) => {
                        if (child.name === 'i') {
                            sportType = child.attribs.title
                        }
                        if (child.name === 'time') {
                            time = $(child).text()
                        }
                        if (child.name === 'div') {
                            let names = $(child.children[1]).text()
                            if (names.includes('Sverige')) {
                                opponent = names.replace("Sverige", "")
                                opponent = opponent.replace(" – ", "")
                            }
                            
                            league = $(child.children[9]).text()
                            $(child.children[5].children).each((i, channel) => {
                                if (channel.name === 'a') {
                                    if (!channels.includes(parsingChannel(channel.attribs.title))) {
                                        channels.push(parsingChannel(channel.attribs.title))
                                    }
                                }
                            })
                        }
                    })
                    if (opponent === '') { return }
                    matches.push({
                        opponent: opponent,
                        date: getDateFromString(date+'T'+time),
                        channels: channels,
                        sportType: parsingSportType(sportType),
                        league: league
                    })
                }
            })
        })
        if (matches === undefined || matches.length == 0) {
            let error = Error('Response was empty')
            error.name = 'empty'
            throw(error)
        }
        return matches
    } catch (error) {
        throw(error)
    }

}

async function getGames(url) {
    try {
        const html = await getHTML(url)
        const matches = await parseHTML(html)
        return matches
    } catch (error) {
        throw(error)
    }

}

module.exports = getGames
function getDateFromString(dateString) {
    let date = new Date(dateString)
    return date
}

function parsingSportType(type) {
    switch (type) {
        case 'Fotboll':
            return 'soccer'
            break
        case 'Ishockey':
            return 'iceHockey'
            break
        case 'Tennis':
            return 'tennis'
            break
        case 'Golf':
            return 'golf'
            break
        case 'Handboll':
            return 'handball'
            break
        case 'Vintersport':
            return 'wintersport'
            break
        case 'Fighting':
            return 'fighting'
            break
        case 'Trav':
            return 'trotting'
            break
        case 'Innebandy':
            return 'floorball'
            break
        case 'Basket':
            return 'basketball'
            break
        case 'Motorsport':
            return 'motordport'
            break
        case 'Dart':
            return 'dart'
            break
        case 'Bandy':
            return 'bandy'
            break
        default:
            return 'unknown'
            break
    }
}

function parsingChannel(channelName) {
    switch (channelName) {
        case 'Aftonbladet Plus':
            return 'aftonbladetPlus'
            break
        case 'ATG':
            return 'atg'
            break
        case 'C MORE Golf':
        case 'C MORE Fotboll':
        case 'C MORE Hockey':
        case 'C MORE Live':
        case 'C MORE Live 2':
        case 'C MORE Live 3':
        case 'C MORE Live 4':
        case 'C MORE Live 5':
        case 'C MORE Stream':
            return 'cmore'
            break
        case 'Dplay':
            return 'dplay'
            break
        case 'Eurosport 1':
        case 'Eurosport 2':
        case 'Eurosport Player':
            return 'eurosport'
            break
        case 'Inställd':
            return 'cancelled'
            break
        case 'Kanal 5':
            return 'kanal5'
            break
        case 'Kanal 9':
            return 'kanal9'
            break
        case 'Kunskapskanalen':
            return 'kunskapsKanalen'
            break
        case 'Sjuan':
            return 'sjuan'
            break
        case 'Sportkanalen':
            return 'sportKanalen'
            break
        case 'Svenskfotboll.se':
            return 'svenskFotbollse'
            break
        case 'SVT':
            return 'svt'
            break
        case 'SVT 1':
            return 'svt1'
            break
        case 'SVT 2':
            return 'svt2'
            break
        case 'SVT 24':
            return 'svt24'
            break
        case 'SVT Play':
            return 'svtPlay'
            break
        case 'TV10':
            return 'tv10'
            break
        case 'TV12':
            return 'tv12'
            break
        case 'TV3':
            return 'tv3'
            break
        case 'TV3 Sport':
            return 'tv3Sport'
            break
        case 'TV4':
            return 'tv4'
            break
        case 'TV4 Play':
            return 'tv4Play'
            break
        case 'TV6':
            return 'tv6'
            break
        case 'Viafree':
            return 'viafree'
            break
        case 'Viaplay Fighting':
        case 'Viaplay.se':
            return 'viaplay'
            break
        case 'Viasat 16':
            return 'viasat16'
            break
        case 'Viasat 360':
            return 'viasat360'
            break
        case 'Viasat Fotboll':
            return 'viasatFotboll'
            break
        case 'Viasat Golf':
            return 'viasatGolf'
            break
        case 'Viasat Hockey':
            return 'viasatHockey'
            break
        case 'Viasat Motor':
            return 'viasatMotor'
            break
        case 'Viasat Sport':
            return 'viasatSport'
            break
        case 'Viasat Sport Extra':
            return 'viasatSportExtra'
            break
        case 'Viasat Sport Premium':
            return 'viasatSportPremium'
            break
        case 'Viasat Ultra HD':
            return 'viasatUltraHD'
            break
        case 'Viasat Xtra':
            return 'viasatXtra'
            break
        default:
            return 'unknown'
            break
    }
}

module.exports = {
    getDateFromString,
    parsingSportType,
    parsingChannel
}
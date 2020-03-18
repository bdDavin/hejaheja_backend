function getDateFromString(dateString) {
    let date = new Date(dateString+':00.000+01:00')
    return date
}

function parsingSportType(type) {
    switch (type) {
        case 'Fotboll':
            return 'soccer'
        case 'Ishockey':
            return 'iceHockey'
        case 'Tennis':
            return 'tennis'
        case 'Golf':
            return 'golf'
        case 'Handboll':
            return 'handball'
        case 'Vintersport':
            return 'wintersport'
        case 'Fighting':
            return 'fighting'
        case 'Trav':
            return 'trotting'
        case 'Innebandy':
            return 'floorball'
        case 'Basket':
            return 'basketball'
        case 'Motorsport':
            return 'motordport'
        case 'Dart':
            return 'dart'
        case 'Bandy':
            return 'bandy'
        default:
            return 'unknown'
    }
}

function parsingChannel(channelName) {
    switch (channelName) {
        case 'Aftonbladet Plus':
            return 'aftonbladetPlus'
        case 'ATG':
            return 'atg'
        case 'C MORE Golf':
            return 'cmoreGolf'
        case 'C MORE Fotboll':
            return 'cmoreFotboll'
        case 'C MORE Hockey':
            return 'cmoreHockey'
        case 'C MORE Live':
            return 'cmoreLive'
        case 'C MORE Live 2':
            return 'cmoreLive2'
        case 'C MORE Live 3':
            return 'cmoreLive3'
        case 'C MORE Live 4':
            return 'cmoreLive4'
        case 'C MORE Live 5':
            return 'cmoreLive5'
        case 'C MORE Stream':
            return 'cmoreStream'
        case 'Dplay':
            return 'dplay'
        case 'Eurosport 1':
            return 'eurosport1'
        case 'Eurosport 2':
            return 'eurosport2'
        case 'Eurosport Player':
            return 'eurosportPlayer'
        case 'Kanal 5':
            return 'kanal5'
        case 'Kanal 9':
            return 'kanal9'
        case 'Kunskapskanalen':
            return 'kunskapsKanalen'
        case 'Sjuan':
            return 'sjuan'
        case 'Sportkanalen':
            return 'sportKanalen'
        case 'Svenskfotboll.se':
            return 'svenskFotbollse'
        case 'SVT':
            return 'svt'
        case 'SVT 1':
            return 'svt1'
        case 'SVT 2':
            return 'svt2'
        case 'SVT 24':
            return 'svt24'
        case 'SVT Play':
            return 'svtPlay'
        case 'TV10':
            return 'tv10'
        case 'TV12':
            return 'tv12'
        case 'TV3':
            return 'tv3'
        case 'TV3 Sport':
            return 'tv3Sport'
        case 'TV4':
            return 'tv4'
        case 'TV4 Play':
            return 'tv4Play'
        case 'TV6':
            return 'tv6'
        case 'Viafree':
            return 'viafree'
        case 'Viaplay Fighting':
        case 'Viaplay.se':
            return 'viaplay'
        case 'Viasat 16':
            return 'viasat16'
        case 'Viasat 360':
            return 'viasat360'
        case 'Viasat Fotboll':
            return 'viasatFotboll'
        case 'Viasat Golf':
            return 'viasatGolf'
        case 'Viasat Hockey':
            return 'viasatHockey'
        case 'Viasat Motor':
            return 'viasatMotor'
        case 'Viasat Sport':
            return 'viasatSport'
        case 'Viasat Sport Extra':
            return 'viasatSportExtra'
        case 'Viasat Sport Premium':
            return 'viasatSportPremium'
        case 'Viasat Ultra HD':
            return 'viasatUltraHD'
        case 'Viasat Xtra':
            return 'viasatXtra'
        default:
            return 'unknown'
    }
}

module.exports = {
    getDateFromString,
    parsingSportType,
    parsingChannel
}
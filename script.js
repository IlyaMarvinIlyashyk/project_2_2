
// Kanye App ------------------------------------

const kanyeApp = {}

kanyeApp.showQuote = (kanyeData) => {
    
    const textDisplay = `${kanyeData.quote}`
    
    $('.quote').text(`${textDisplay} - Kanye West`)
    
}
kanyeApp.init = () => {
    $('#kanyeSubmit').on('click', (event) => {
        
        event.preventDefault()
        
        $.ajax({
            url: 'https://api.kanye.rest',
            method: "GET",
            dataType: "json"
        })
        
        .then((kanyeData) => {
            
            kanyeApp.showQuote(kanyeData)
        })
    })
}

$(() => {
        kanyeApp.init()
    })

// Name App ------------------------------------

const nameApp = {}

nameApp.displayNameMeaning = (nameData) => {

    nameData.country.forEach((country)=>{
        // console.log(country.country_id)

        let countryID = country.country_id

        countryID = nameApp.convert(countryID)
        
        const nameElement = 
        `<p>${countryID}</p>`

    $('.nameText').append(nameElement)
    
    })  
}

// This was an annoying problem to solve. 
// I didn't realize that there was no way for the nationalize.io API to just print the country's name, it only prints ID.  
// So, I did a bunch of googling and looking at others' code and came up with this loop. 
// main shout-out to: kevinhng86 
// "https://www.webhostingtalk.com/showthread.php?t=1623403"

nameApp.convert = (countryID) => {
    let nameCountries = {
        'Afghanistan': 'AF',
        'Aland Islands': 'AX',
        'Albania': 'AL',
        'Algeria': 'DZ',
        'American Samoa': 'AS',
        'Andorra': 'AD',
        'Angola': 'AO',
        'Anguilla': 'AI',
        'Antarctica': 'AQ',
        'Antigua And Barbuda': 'AG',
        'Argentina': 'AR',
        'Armenia': 'AM',
        'Aruba': 'AW',
        'Australia': 'AU',
        'Austria': 'AT',
        'Azerbaijan': 'AZ',
        'Bahamas': 'BS',
        'Bahrain': 'BH',
        'Bangladesh': 'BD',
        'Barbados': 'BB',
        'Belarus': 'BY',
        'Belgium': 'BE',
        'Belize': 'BZ',
        'Benin': 'BJ',
        'Bermuda': 'BM',
        'Bhutan': 'BT',
        'Bolivia': 'BO',
        'Bosnia And Herzegovina': 'BA',
        'Botswana': 'BW',
        'Bouvet Island': 'BV',
        'Brazil': 'BR',
        'British Indian Ocean Territory': 'IO',
        'Brunei Darussalam': 'BN',
        'Bulgaria': 'BG',
        'Burkina Faso': 'BF',
        'Burundi': 'BI',
        'Cambodia': 'KH',
        'Cameroon': 'CM',
        'Canada': 'CA',
        'Cape Verde': 'CV',
        'Cayman Islands': 'KY',
        'Central African Republic': 'CF',
        'Chad': 'TD',
        'Chile': 'CL',
        'China': 'CN',
        'Christmas Island': 'CX',
        'Cocos (Keeling) Islands': 'CC',
        'Colombia': 'CO',
        'Comoros': 'KM',
        'Congo': 'CG',
        'Congo, Democratic Republic': 'CD',
        'Cook Islands': 'CK',
        'Costa Rica': 'CR',
        'Cote D\'Ivoire': 'CI',
        'Croatia': 'HR',
        'Cuba': 'CU',
        'Cyprus': 'CY',
        'Czech Republic': 'CZ',
        'Denmark': 'DK',
        'Djibouti': 'DJ',
        'Dominica': 'DM',
        'Dominican Republic': 'DO',
        'Ecuador': 'EC',
        'Egypt': 'EG',
        'El Salvador': 'SV',
        'Equatorial Guinea': 'GQ',
        'Eritrea': 'ER',
        'Estonia': 'EE',
        'Ethiopia': 'ET',
        'Falkland Islands (Malvinas)': 'FK',
        'Faroe Islands': 'FO',
        'Fiji': 'FJ',
        'Finland': 'FI',
        'France': 'FR',
        'French Guiana': 'GF',
        'French Polynesia': 'PF',
        'French Southern Territories': 'TF',
        'Gabon': 'GA',
        'Gambia': 'GM',
        'Georgia': 'GE',
        'Germany': 'DE',
        'Ghana': 'GH',
        'Gibraltar': 'GI',
        'Greece': 'GR',
        'Greenland': 'GL',
        'Grenada': 'GD',
        'Guadeloupe': 'GP',
        'Guam': 'GU',
        'Guatemala': 'GT',
        'Guernsey': 'GG',
        'Guinea': 'GN',
        'Guinea-Bissau': 'GW',
        'Guyana': 'GY',
        'Haiti': 'HT',
        'Heard Island & Mcdonald Islands': 'HM',
        'Holy See (Vatican City State)': 'VA',
        'Honduras': 'HN',
        'Hong Kong': 'HK',
        'Hungary': 'HU',
        'Iceland': 'IS',
        'India': 'IN',
        'Indonesia': 'ID',
        'Iran, Islamic Republic Of': 'IR',
        'Iraq': 'IQ',
        'Ireland': 'IE',
        'Isle Of Man': 'IM',
        'Israel': 'IL',
        'Italy': 'IT',
        'Jamaica': 'JM',
        'Japan': 'JP',
        'Jersey': 'JE',
        'Jordan': 'JO',
        'Kazakhstan': 'KZ',
        'Kenya': 'KE',
        'Kiribati': 'KI',
        'Korea': 'KR',
        'Kuwait': 'KW',
        'Kyrgyzstan': 'KG',
        'Lao People\'s Democratic Republic': 'LA',
        'Latvia': 'LV',
        'Lebanon': 'LB',
        'Lesotho': 'LS',
        'Liberia': 'LR',
        'Libyan Arab Jamahiriya': 'LY',
        'Liechtenstein': 'LI',
        'Lithuania': 'LT',
        'Luxembourg': 'LU',
        'Macao': 'MO',
        'Macedonia': 'MK',
        'Madagascar': 'MG',
        'Malawi': 'MW',
        'Malaysia': 'MY',
        'Maldives': 'MV',
        'Mali': 'ML',
        'Malta': 'MT',
        'Marshall Islands': 'MH',
        'Martinique': 'MQ',
        'Mauritania': 'MR',
        'Mauritius': 'MU',
        'Mayotte': 'YT',
        'Mexico': 'MX',
        'Micronesia, Federated States Of': 'FM',
        'Moldova': 'MD',
        'Monaco': 'MC',
        'Mongolia': 'MN',
        'Montenegro': 'ME',
        'Montserrat': 'MS',
        'Morocco': 'MA',
        'Mozambique': 'MZ',
        'Myanmar': 'MM',
        'Namibia': 'NA',
        'Nauru': 'NR',
        'Nepal': 'NP',
        'Netherlands': 'NL',
        'Netherlands Antilles': 'AN',
        'New Caledonia': 'NC',
        'New Zealand': 'NZ',
        'Nicaragua': 'NI',
        'Niger': 'NE',
        'Nigeria': 'NG',
        'Niue': 'NU',
        'Norfolk Island': 'NF',
        'Northern Mariana Islands': 'MP',
        'Norway': 'NO',
        'Oman': 'OM',
        'Pakistan': 'PK',
        'Palau': 'PW',
        'Palestinian Territory, Occupied': 'PS',
        'Panama': 'PA',
        'Papua New Guinea': 'PG',
        'Paraguay': 'PY',
        'Peru': 'PE',
        'Philippines': 'PH',
        'Pitcairn': 'PN',
        'Poland': 'PL',
        'Portugal': 'PT',
        'Puerto Rico': 'PR',
        'Qatar': 'QA',
        'Reunion': 'RE',
        'Romania': 'RO',
        'Russian Federation': 'RU',
        'Rwanda': 'RW',
        'Saint Barthelemy': 'BL',
        'Saint Helena': 'SH',
        'Saint Kitts And Nevis': 'KN',
        'Saint Lucia': 'LC',
        'Saint Martin': 'MF',
        'Saint Pierre And Miquelon': 'PM',
        'Saint Vincent And Grenadines': 'VC',
        'Samoa': 'WS',
        'San Marino': 'SM',
        'Sao Tome And Principe': 'ST',
        'Saudi Arabia': 'SA',
        'Senegal': 'SN',
        'Serbia': 'RS',
        'Seychelles': 'SC',
        'Sierra Leone': 'SL',
        'Singapore': 'SG',
        'Slovakia': 'SK',
        'Slovenia': 'SI',
        'Solomon Islands': 'SB',
        'Somalia': 'SO',
        'South Africa': 'ZA',
        'South Georgia And Sandwich Isl.': 'GS',
        'Spain': 'ES',
        'Sri Lanka': 'LK',
        'Sudan': 'SD',
        'Suriname': 'SR',
        'Svalbard And Jan Mayen': 'SJ',
        'Swaziland': 'SZ',
        'Sweden': 'SE',
        'Switzerland': 'CH',
        'Syrian Arab Republic': 'SY',
        'Taiwan': 'TW',
        'Tajikistan': 'TJ',
        'Tanzania': 'TZ',
        'Thailand': 'TH',
        'Timor-Leste': 'TL',
        'Togo': 'TG',
        'Tokelau': 'TK',
        'Tonga': 'TO',
        'Trinidad And Tobago': 'TT',
        'Tunisia': 'TN',
        'Turkey': 'TR',
        'Turkmenistan': 'TM',
        'Turks And Caicos Islands': 'TC',
        'Tuvalu': 'TV',
        'Uganda': 'UG',
        'Ukraine': 'UA',
        'United Arab Emirates': 'AE',
        'United Kingdom': 'GB',
        'United States': 'US',
        'United States Outlying Islands': 'UM',
        'Uruguay': 'UY',
        'Uzbekistan': 'UZ',
        'Vanuatu': 'VU',
        'Venezuela': 'VE',
        'Viet Nam': 'VN',
        'Virgin Islands, British': 'VG',
        'Virgin Islands, U.S.': 'VI',
        'Wallis And Futuna': 'WF',
        'Western Sahara': 'EH',
        'Yemen': 'YE',
        'Zambia': 'ZM',
        'Zimbabwe': 'ZW'
    }

    if (countryID.length === 2) {
        let countryName = ""
        for (let name in nameCountries) {
            if (nameCountries[name] === countryID) {
                countryName = name
                return [countryName]
            }
            // console.log(name)
            // console.log(nameCountries)
            // console.log(nameCountries[name])
        }
    }
}

nameApp.countrySearch = (name) => {

    $.ajax({
        url: `https://api.nationalize.io?name=${name}`,
        method: "GET",
        dataType: "json"
    })
        .then((nameData) => {

            $('.nameText').html('')

            nameApp.displayNameMeaning(nameData)
        })
}

nameApp.init = () => {
    $('#nameSubmit').on('click', (event)=> {

        event.preventDefault()

        const userInput = $('#searchInput').val();
        
        nameApp.countrySearch(userInput);

        // console.log(userInput)
    })
}

$(()=>{
    nameApp.init()
})

// Bored App ---------------------------------

const boredApp = {}


boredApp.showActivity = (activityData) => {
    
    const activityText = `${activityData.activity}`.toLowerCase()

    $('.bored').text(`${activityText}`)
}

boredApp.init = () => {
    $('#boredSubmit').on('click', (event) => {

        event.preventDefault()

        $.ajax({
            url: "https://www.boredapi.com/api/activity?type=recreational",
            method: "GET",
            dataType: "json"
        })
        
        .then((activityData) => {
                // console.log(data)
                boredApp.showActivity(activityData)
            })
    })
}

$(()=>{
    boredApp.init()
})

// Trivia App -----------------------------------
// couldn't really finish it (mostly an exercise for myself)
// This was super hard!!
// I mostly did this for learning purposes and wasn't even going to include it in my final, but decided to anyway for any feedback. 
// still couldn't figure out how to randomize answer placements...as of now the correct answer is always the first one :/

const triviaApp = {
}

triviaApp.totalScore = 0

triviaApp.displayContent = (questions) => {
    questions.forEach((question) => {

        const triviaHtml = `
            <legend>${question.question}</legend>

            <input type="radio" name ="trivia"  value="correct" required>
            <label>${question.correct_answer}</label>
            
            <input type="radio" name ="trivia" value="wrong">
            <label>${question.incorrect_answers[1]}</label>

            <input type="radio" name ="trivia" value="wrong" >
            <label>${question.incorrect_answers[2]}</label>

            <input type="radio" name ="trivia" value="wrong">
            <label>${question.incorrect_answers[0]}</label>
        `
        $('#triviaForm').html(triviaHtml)

        triviaApp.score()
    })
}

triviaApp.init = () => {
    $('#triviaSubmit').on('click', (event) => {

        event.preventDefault()

        $.ajax({
            url: "https://opentdb.com/api.php?amount=1&type=multiple",
            method: "GET",
            dataType: "json"
        })
            .then((triviaData) => {
                // console.log(triviaData)
                const questions = triviaData.results

                triviaApp.displayContent(questions)
            })
    })
}

triviaApp.score = () => {

    $('input:radio[name="trivia"]').change(() => {

        let userAnswers = $('input[value="correct"]')

        // making sure the "correct" answer was "clicked" was super difficult to execute
        // the solution i found below was once again from googling
        // the following piece of code I took and modified for my own purposes, but the original creator is by ThoTr from:
        // https://forum.freecodecamp.org/t/display-data-from-api-as-a-quiz-application/281590/4
        
        for (correctAnswer of userAnswers) {
            if (correctAnswer.checked == true) {
                triviaApp.totalScore += 1
                $('#triviaForm').empty(triviaApp.displayContent.triviaHtml)
            }

            else {
                triviaApp.totalScore += 0
                $('#triviaForm').empty(triviaApp.displayContent.triviaHtml)
            }
        }

        // ends here
        $('.triviaOutcome').show()

        $('.triviaOutcome').html(`Points: ${triviaApp.totalScore}`)
    })
}

$(()=>{
    $('.triviaOutcome').hide(); // is this an okay place to put this?
    triviaApp.init()
})
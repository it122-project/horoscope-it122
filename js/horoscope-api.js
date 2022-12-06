const baseURL = 'https://aztro.sameerkumar.website';

const SIGNS = [
    'pisces',
    'aquarius',
    'capricorn',
    'saggitarius',
    'scorpio',
    'libra',
    'virgo',
    'leo',
    'cancer',
    'gemini',
    'taurus',
    'aries'
];

const DAYS = [
    'today',
    'yesterday',
    'tomorrow'
];

function stringValidator (value, possibleValues) {
    if (typeof value === 'string' && possibleValues.includes(value.toLowerCase())) {
        return value.toLowerCase();
    } else {
        return possibleValues[0];
    }
}

class Options {
    constructor(sign, day) {
        this.sign = stringValidator(sign, SIGNS);
        this.day = stringValidator(day, DAYS);
    }
}

async function getHoroscope(sign, day) {
    const options = new Options(sign, day);
    const fetchURL = `${baseURL}/?sign=${options.sign}&day${options.day}`;

    const response = await fetch(fetchURL, {
        method: 'POST',
    });

    return response.json();
}

export {getHoroscope};
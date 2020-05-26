const MONTHS = [
    { '1': `Jan` },
    { '2': `Feb` },
    { '3': `Mar` },
    { '4': `Apr` },
    { '5': `May` },
    { '6': `Jun` },
    { '7': `Jul` },
    { '8': `Aug` },
    { '9': `Sep` },
    { '10': `Oct` },
    { '11': `Nov` },
    { '12': `Dec` },
]
const EVENTS = [
    `Bus`,
    `Drive`,
    `Flight`,
    `Taxi`,
    `Restaurant`,
    `Ship`,
    `Sightseeing`,
    `Check-in`,
    `Train`,
    `Transport`,
]
const CITIES = [
    `Geneva`,
    `Chamonix`,
    `Amsterdam`,
    `Saint Petersburg`,
    `Moscow`,
]
const OFFERS = [
    { name: `Add`, type: `luggage`, price: `10`, isChecked: false },
    { name: `Switch to`, type: `comfort`, price: `100`, isChecked: false },
    { name: `Add`, type: `meal`, price: `15`, isChecked: false },
    { name: `Choose`, type: `seats`, price: `5`, isChecked: false },
]
const DESCRIPTIONS = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
];
const MENU = [`Table`, `Stats`]
const FILTERS = [`EVETYTHING`, `FUTURE`, `PAST`]
const Option = {
    DATE: { day: `2-digit`, month: `2-digit`, year: '2-digit', hour: `2-digit`, minute: `2-digit` },
    // TIME: { hour: `numeric`, minute: `numeric` },
};
const ICONS = {
    'Bus': `../markup/img/icons/bus.png`,
    'Drive': `../markup/img/icons/drive.png`,
    'Flight': `../markup/img/icons/flight.png`,
    'Taxi': `../markup/img/icons/taxi.png`,
    'Restaurant': `../markup/img/icons/restaurant.png`,
    'Ship': `../markup/img/icons/ship.png`,
    'Sightseeing': `../markup/img/icons/sightseeing.png`,
    'Check-in': `../markup/img/icons/check-in.png`,
    'Train': `../markup/img/icons/train.png`,
    'Transport': `../markup/img/icons/transport.png`,
}


export { MONTHS, CITIES, EVENTS, OFFERS, DESCRIPTIONS, MENU, FILTERS, Option, ICONS }
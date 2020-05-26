import { MONTHS, CITIES, EVENTS, OFFERS, DESCRIPTIONS, MENU, FILTERS, Option, ICONS } from './const.js'
import { getPhoto, createPhotos, render, getDateSortedEvents, createPho, getDate, dater, date, getPrice, getRandomDescription, getrandomDate, getRandomDestination, getRandomEvent, getRandomOffer, generateRandomNumber } from './utils.js';
const OFFERS_COUNT = {
    min: 1,
    max: 2
};
const EVENTS_COUNT = {
    min: 1,
    max: 10,
}
const generateEvent = () => {
    const type = getRandomEvent(EVENTS);
    const price = getPrice();
    const description = getRandomDescription(DESCRIPTIONS);
    const destination = getRandomDestination(CITIES);
    const offers = getRandomOffer(OFFERS, generateRandomNumber(OFFERS_COUNT.min, OFFERS_COUNT.max));
    const startDate = date();
    const endDate = date();
    const photos = createPhotos(generateRandomNumber(1, 4));
    return {
        type,
        price,
        description,
        destination,
        offers,
        startDate,
        endDate,
        photos,
    }

}

const getEvents = () => {
    return new Array(generateRandomNumber(EVENTS_COUNT.min, EVENTS_COUNT.max)).fill(``).map(() => {
        return generateEvent()
    })
}
const events = getEvents();
const getSortedEvents = (arr) => {


    return arr.sort((a, b) => {
        let aa = Date.parse(a.startDate);
        let bb = Date.parse(b.startDate)
        return aa - bb;

    });

}
const getEventSortedEvents = (arr) => {
    return arr.slice().sort((a, b) => {
        let eventA = a.type;
        let eventB = b.type
        if (eventA < eventB)
            return -1
        if (eventA > eventB)
            return 1
    })
}
const getPriceSortedEvents = (arr) => {
    return arr.slice().sort((a, b) => {
        return a.price - b.price
    })
}

const sortedHalfEvents = getSortedEvents(events)
const eventSortedEvents = getEventSortedEvents(sortedHalfEvents)
const priceSortedEvents = getPriceSortedEvents(sortedHalfEvents)



export { events, sortedHalfEvents, eventSortedEvents, priceSortedEvents }
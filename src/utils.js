import { tripEventsSection } from "./main";
import { TripController } from './components/TripController';

import { eventSortedEvents, sortedHalfEvents, priceSortedEvents } from './events'
export const renderPosition = {
    AFTERBEGIN: `afterbegin`,
    BEFOREEND: `beforeend`
}
export const createElement = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement
}
const generateRandomNumber = (min, max) =>
    min + Math.round(Math.random() * (max - min));
const getPhoto = () => {
    return `http://picsum.photos/300/150?r=${Math.random()}`;
};
const createPho = () => {
    return `<img class="event__photo" src='${getPhoto()}' alt="Event photo"></img>`;
};
const createPhotos = (capacity) => {
    return new Array(capacity).fill(``).map((item) => {
        return createPho();
    });
};
const render = (container, element, place) => {
    switch (place) {
        case renderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case renderPosition.BEFOREEND:
            container.append(element);
            break;
    }
};

const EVENT_PRICE = {
    min: 1,
    max: 100,
};


const getRandomEvent = (arr) => {
    return arr[generateRandomNumber(0, arr.length - 1)];
};
const getDate = () => {
    return `${generateRandomNumber(1, 31)}/${generateRandomNumber(
    1,
    12
  )}/20 ${generateRandomNumber(0, 24)}:${generateRandomNumber(0, 60)}`;
};
const getRandomOffer = (arr, capacity) => {
    switch (capacity) {
        case 1:
            return new Array(1).fill(``).map(() => {
                return arr[generateRandomNumber(0, 3)];
            });
            break;
        case 2:
            return new Array(2).fill(``).map(() => {
                return arr[generateRandomNumber(0, 3)];
            });
            break;
    }
};
const getRandomDescription = (arr) => {
    return new Array(3).fill(``).map(() => {
        return arr[generateRandomNumber(0, arr.length)];
    });
};
const getPrice = () => {
    return generateRandomNumber(EVENT_PRICE.min, EVENT_PRICE.max);
};
const getRandomDestination = (arr) => {
    return arr[generateRandomNumber(0, arr.length)];
};

const date = () => {
    const datee = new Date();
    datee.setHours(generateRandomNumber(0, 23));
    datee.setMonth(generateRandomNumber(1, 12))
    datee.setMinutes(generateRandomNumber(0, 60))
    datee.setDate(generateRandomNumber(1, 31))
    return datee
}
const dater = date()
console.log(dater)
const getDateSortedEvents = (arr) => {

}
const daysDuration = (start, end) => {
    if (start - end > 0) {
        return `0${start - end}D`
    } else {
        return '00D'
    }

}
const hoursDuration = (start, end) => {
    if (start - end > 0) {
        return `${start-end}H`
    } else {
        return `00H`
    }
}
const minutesDuration = (start, end) => {
    if (start - end > 0) {
        return `${start-end}M`
    } else {
        return `00M`
    }
}

const sortingByEvent = () => {

    new TripController(tripEventsSection).renderTripPoints(eventSortedEvents)
}
const sortingByPrice = () => {
    new TripController(tripEventsSection).renderTripPoints(priceSortedEvents)
}
const sortingByTime = () => {
    new TripController(tripEventsSection).renderTripPoints(sortedHalfEvents)
}

export {

    getPhoto,
    createPhotos,
    render,
    createPho,
    getDate,
    getPrice,
    getRandomDescription,
    getRandomDestination,
    getRandomEvent,
    getRandomOffer,
    generateRandomNumber,
    getDateSortedEvents,
    dater,
    date,
    daysDuration,
    hoursDuration,
    minutesDuration,
    sortingByEvent,
    sortingByPrice,
    sortingByTime,
};
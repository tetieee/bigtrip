import { CITIES, DESCRIPTIONS, MONTHS } from '../const';
import { generateRandomNumber, createElement } from '../utils'
import { sortedHalfEvents } from '../events'
import AbstractComponent from './abstractcomponent'
const createRouteInfoTemplate = (DESTINATIONS, MONTHS, events) => {
    return (
        `<div class="trip-info__main">
    <h1 class="trip-info__title">${DESTINATIONS[generateRandomNumber(0,DESTINATIONS.length-1)]} &mdash; ... &mdash; ${event.destination}</h1>
    <p class="trip-info__dates">${MONTHS[3].key } ${events[0].startDate.getDate()}&nbsp;&mdash;&nbsp;${events[events.length-1].endDate.getDate()}</p>
  </div>`
    );
};
export class RouteInfo extends AbstractComponent {
    constructor() {
        super()

    }
    getTemplate() {
        return createRouteInfoTemplate(CITIES, MONTHS, sortedHalfEvents)
    }

}
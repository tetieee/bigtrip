import { ICONS, OFFERS } from '../const.js'
import AbstractComponent from './abstractcomponent'
import {
    daysDuration,
    hoursDuration,
    minutesDuration,
    generateRandomNumber,
    createElement
} from '../utils'
const createEventsListItemTemplate = (event) => {

    const listOffer = (OFFERS) => {
        return (
            `<li class="event__offer">
        <span class="event__offer-title">${OFFERS[generateRandomNumber(0,OFFERS.length-1)].name} ${OFFERS[generateRandomNumber(0,OFFERS.length-1)].type}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${OFFERS[generateRandomNumber(0,OFFERS.length-1)].price}</span>
       </li>`
        )
    }
    return (
        `<li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src=${ICONS[event.type]} alt="Event type icon">
          </div>
    <h3 class="event__title">${event.type} to ${event.destination}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="${event.startDate}">${event.startDate.getHours()}:${event.startDate.getMinutes()}</time>
              &mdash;
              <time class="event__end-time" datetime="${event.endDate}">${event.endDate.getHours()}:${event.endDate.getMinutes()}</time>
            </p>
            <p class="event__duration">${daysDuration(event.startDate.getDate(),event.endDate.getDate())}:${hoursDuration(event.startDate.getHours(),event.endDate.getHours())}:${minutesDuration(event.startDate.getMinutes(),event.endDate.getMinutes())}</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${event.price}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
          ${listOffer(OFFERS)}
          </ul>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>`
    );
};
class EventList extends AbstractComponent {
    constructor(event) {
        super()
        this._event = event
    }
    getTemplate() {
        return createEventsListItemTemplate(this._event)

    }
    setRollUpHandler(handler) {
        this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler)
    }

}
export { EventList }
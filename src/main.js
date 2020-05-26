import { DayListItem } from "./components/listItemTemp.js";
import { DayList } from "./components/listTemplate.js";
import { FilterForm } from "./components/filterForm.js";
import { RouteInfo } from "./components/RouteInfo.js";
import { Menu } from "./components/menu.js";
import { SortForm } from "./components/sortForm.js";
import { render, renderPosition, sortingByEvent, sortingByPrice, sortingByTime } from "./utils.js";
import { sortedHalfEvents } from "./events.js";
import { TripController } from './components/TripController'
import AbstractComnponent from './components/abstractcomponent'

const routeInfoSection = document.querySelector(`.trip-main`);
const tripMenu = document.querySelector(`.trip-main__trip-controls`);
export const tripEventsSection = document.querySelector(`.trip-events`);

render(routeInfoSection, new RouteInfo().getElement(), renderPosition.AFTERBEGIN);
render(tripMenu, new Menu().getElement(), renderPosition.BEFOREEND);
render(tripMenu, new FilterForm().getElement(), renderPosition.BEFOREEND);
new TripController(tripEventsSection).render()
    // render(tripEventsSection, new SortForm().getElement(), renderPosition.BEFOREEND);
    // render(tripEventsSection, new DayList().getElement(), renderPosition.BEFOREEND);
export const tripDaysList = document.querySelector(`.trip-days`);
render(tripDaysList, new DayListItem().getElement(), renderPosition.BEFOREEND);
export const tripEvents = tripEventsSection.querySelector(`.trip-events__list`);

new TripController(tripEvents).renderTripPoints(sortedHalfEvents)
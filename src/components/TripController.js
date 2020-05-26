import { render, renderPosition, sortingByEvent, sortingByPrice, sortingByTime } from '../utils'
import { SortForm } from './sortForm'
import { DayList } from './listTemplate'
import { EventList } from './eventList'
import { EventEdit } from './eventEdit'

export class TripController {
    constructor(container) {
        this.container = container
        this._sort = new SortForm()
        this._daylist = new DayList()

    }
    render() {
        render(this.container, this._sort.getElement(), renderPosition.BEFOREEND)
        render(this.container, this._daylist.getElement(), renderPosition.BEFOREEND)
        this._sort.setSortEventHandler(sortingByEvent)
        this._sort.setSortPriceHandler(sortingByPrice)
        this._sort.setSortTimeHandler(sortingByTime)
    }
    renderEvent(event, container) {

        const newEvent = new EventList(event);
        const newAddEditEvent = new EventEdit(event);
        const openForm = () => {
            container.replaceChild(newAddEditEvent.getElement(), newEvent.getElement())

            document.addEventListener(`keydown`, onEscKeydown);
        }
        const closeForm = () => {
            container.querySelector(`.event--edit`).replaceWith(newEvent.getElement())
        };
        const onEscKeydown = (evt) => {
            const isEscKeydown = evt.keyCode === 27;
            if (isEscKeydown) {
                closeForm()
                document.removeEventListener(`keydown`, onEscKeydown);
                //eventRollupButton.addEventListener(`click`, openForm)
            }
        };

        newEvent.setRollUpHandler(openForm)
        newAddEditEvent.setSubmitHandler(closeForm)
        render(container, newEvent.getElement(), renderPosition.BEFOREEND);
    };
    renderTripPoints(events) {
        new Array(events.length).fill(``).forEach((item, index) => {
            this.renderEvent(events[index], this.container)

        })
    }

}
import AbstractComponent from './abstractcomponent'
const createDayListTemplate = () => {
    return (
        `<ul class="trip-days">
  </ul>`
    );
};
class DayList extends AbstractComponent {
    constructor() {
        super()

    }
    getTemplate() {
        return createDayListTemplate()
    }

}
export { DayList }
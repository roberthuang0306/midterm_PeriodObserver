//1. import
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here 
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
 

//2. create the view model, put it in the props obj
//3. render the scheduler component, mind that the Scheduler component should be placed in a DragDropContext(father or ancestor).

class Calendar extends Component {
    render() {
        const {schedulerData} = this.props;
        return (
            <div>
                <Scheduler schedulerData={schedulerData}
                           prevClick={this.prevClick}
                           nextClick={this.nextClick}
                           onSelectDate={this.onSelectDate}
                           onViewChange={this.onViewChange}
                           eventItemClick={this.eventClicked}/>
            </div>
        );
    }
}
export default Calendar



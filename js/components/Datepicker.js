import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';

export default class Datepicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  handleSendDate=()=>{
      console.log('testIso');
      console.log(this.state.from.toISOString());
      this.props.setDate(this.state.from.toISOString(),this.state.to.toISOString());
  }
  render() {
    const { from, to } = this.state;
    console.log(this.state);
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <div >
            
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `${from.toLocaleDateString()} ~
                  ${to.toLocaleDateString()}`}
            {from &&
              to && (
                <nav style={{justifyContent: 'center', position: 'relative', display: 'flex'}}>
                    <ul style={{width:'240px'}}>
                        <li><a onClick={this.handleResetClick}>Reset</a></li>
                        <li><a onClick={this.handleSendDate}>send</a></li>
                    </ul>
                </nav>
              )}
        </div>
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}
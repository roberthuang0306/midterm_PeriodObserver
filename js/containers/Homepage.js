import React, { Component } from "react";
import '@babel/polyfill'
import HomepageButtons from "../components/HomepageButtons"
import Readonly from '../components/Readonly'
import Datepicker from '../components/Datepicker'
import moment from 'moment'
import {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler/lib/index'

export default class Homepage extends Component {
	constructor(props){
		super(props);
		let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes, false, false, {
            customCellWidth: 104,
            nonAgendaDayCellHeaderFormat: 'M/D|HH:mm',
        },)
		let period   = props.CalendarData.period;
		let duration = props.CalendarData.duration;
		let dataNum  = props.CalendarData.dataNum;
		let lastStart   = schedulerData.localeMoment(props.CalendarData.lastStart).add(0, 'days').format(DATE_FORMAT);
        let lastEnd     = schedulerData.localeMoment(props.CalendarData.lastEnd).add(0, 'days').format(DATE_FORMAT);
        let nextStart   = schedulerData.localeMoment(lastStart).add(Math.round((props.CalendarData.period)), 'days').format(DATE_FORMAT);
		let nextEnd     = schedulerData.localeMoment(nextStart).add(Math.round((props.CalendarData.duration-1)), 'days').format(DATE_FORMAT);
		let ovulatory   = schedulerData.localeMoment(nextStart).add(-14, 'days').format(DATE_FORMAT);
		let unsafeStart = schedulerData.localeMoment(ovulatory).add(-5, 'days').format(DATE_FORMAT);
		let unsafeEnd   = schedulerData.localeMoment(ovulatory).add(4, 'days').format(DATE_FORMAT);
		let safe1Start  = schedulerData.localeMoment(lastEnd).add(1, 'days').format(DATE_FORMAT);
		let safe1End    = schedulerData.localeMoment(unsafeStart).add(-1, 'days').format(DATE_FORMAT);
		let safe2Start  = schedulerData.localeMoment(unsafeEnd).add(1, 'days').format(DATE_FORMAT);
		let safe2End    = schedulerData.localeMoment(nextStart).add(-1, 'days').format(DATE_FORMAT);
		this.state={
			CalendarData :{ period 	  : period,
							duration  : duration,
							lastStart : lastStart,
							lastEnd   : lastEnd,
							nextStart : nextStart,
							nextEnd   : nextEnd, 
							dataNum   : dataNum},
			period : [
				{
					id: 1,
					start: lastStart+' 12:00:00',
					end: lastEnd+' 12:00:00',
					resourceId: 'r3',
					title: 'last Period',
					bgColor: '#edd3d3'
				},
				{
					id: 2,
					start: nextStart+' 12:00:00',
					end: nextEnd+' 12:00:00',
					resourceId: 'r3',
					title: 'next Period',
					bgColor: '#edd3d3'
				},
				{
					id: 3,
					start: ovulatory+' 12:00:00',
					end: ovulatory+' 12:00:00',
					resourceId: 'r0',
					title: 'Ovulatory',
					bgColor: '#edebd0'
				},
				{
					id: 4,
					start: unsafeStart+' 12:00:00',
					end: unsafeEnd+' 12:00:00',
					resourceId: 'r1',
					title: 'UNSAFE',
					bgColor:'#f981d5'
				},
				{
					id: 5,
					start: safe1Start+' 12:00:00',
					end: safe1End+' 12:00:00',
					resourceId: 'r2',
					title: 'safe',
					bgColor:'#63d38d'
				},
				{
					id: 6,
					start: safe2Start+' 12:00:00',
					end: safe2End+' 12:00:00',
					resourceId: 'r2',
					title: 'safe',
					bgColor:'#63d38d'
				}
			]
		}
		console.log({lastStart,lastEnd,nextStart,nextEnd})
	}
	handleDateChange=(thisStart,thisEnd)=>{
		console.log('datechange')
		let schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes, false, false, {
            customCellWidth: 104,
            nonAgendaDayCellHeaderFormat: 'M/D|HH:mm',
        },)
        let lastStart    = this.state.CalendarData.lastStart;
		let lastEnd      = this.state.CalendarData.lastEnd;
		let thisPeriod   = this.calculateDays(lastStart,thisStart);
		let thisDuration = this.calculateDays(thisStart,thisEnd);
		let dataNum      = this.state.CalendarData.dataNum;
		let period       = this.state.CalendarData.period;
		let duration     = this.state.CalendarData.duration;
		let newPeriod    = ((period*dataNum)+thisPeriod)/(dataNum+1);
		let newDuration  = ((duration*dataNum)+thisDuration)/(dataNum+1);
		    lastStart    = thisStart;
		    lastEnd      = thisEnd;
		let nextStart    = schedulerData.localeMoment(lastStart)  .add(newPeriod, 'days').format(DATE_FORMAT);
		let nextEnd      = schedulerData.localeMoment(nextStart)  .add(newDuration, 'days').format(DATE_FORMAT);
		let ovulatory    = schedulerData.localeMoment(nextStart)  .add(-14, 'days').format(DATE_FORMAT);
		let unsafeStart  = schedulerData.localeMoment(ovulatory)  .add(-5, 'days').format(DATE_FORMAT);
		let unsafeEnd    = schedulerData.localeMoment(ovulatory)  .add(4, 'days').format(DATE_FORMAT);
		let safe1Start   = schedulerData.localeMoment(lastEnd)    .add(1, 'days').format(DATE_FORMAT);
		let safe1End     = schedulerData.localeMoment(unsafeStart).add(-1, 'days').format(DATE_FORMAT);
		let safe2Start   = schedulerData.localeMoment(unsafeEnd)  .add(1, 'days').format(DATE_FORMAT);
		let safe2End     = schedulerData.localeMoment(nextStart)  .add(-1, 'days').format(DATE_FORMAT);
		this.setState((prevState, props) => ({
			CalendarData :{ period 	  : prevState.CalendarData.period,
							duration  : prevState.CalendarData.duration,
							lastStart : prevState.CalendarData.lastStart,
							lastEnd   : prevState.CalendarData.lastEnd,
							nextStart : thisStart,
							nextEnd   : thisEnd, 
							dataNum   : prevState.CalendarData.dataNum},
			period : [
				{
					id: 1,
					start: lastStart,
					end: lastEnd,
					resourceId: 'r3',
					title: 'the Period',
					bgColor: '#edd3d3'
				},
				{
					id: 2,
					start: nextStart,
					end: nextEnd,
					resourceId: 'r3',
					title: 'the Period',
					bgColor: '#edd3d3'
				},
				{
					id: 3,
					start: ovulatory+' 12:00:00',
					end: ovulatory+' 12:00:00',
					resourceId: 'r0',
					title: 'Ovulatory',
					bgColor: '#edebd0'
				},
				{
					id: 4,
					start: unsafeStart+' 12:00:00',
					end: unsafeEnd+' 12:00:00',
					resourceId: 'r1',
					title: 'UNSAFE',
					bgColor:'#f981d5'
				},
				{
					id: 5,
					start: safe1Start+' 12:00:00',
					end: safe1End+' 12:00:00',
					resourceId: 'r2',
					title: 'safe',
					bgColor:'#63d38d'
				},
				{
					id: 6,
					start: safe2Start+' 12:00:00',
					end: safe2End+' 12:00:00',
					resourceId: 'r2',
					title: 'safe',
					bgColor:'#63d38d'
				}
			]
			
		}))
	}
	calculateDays=(day1,day2)=>{
		let Day1 = new Date(day1);
		let Day2 = new Date(day2);
		console.log({Day1,Day2})
		return((Day2-Day1)/1000/86400)
	}
	handleSave=()=>{
		let lastStart   = this.props.CalendarData.lastStart;
		let lastEnd     = this.props.CalendarData.lastEnd;
		let dataNum     = this.props.CalendarData.dataNum;
		let newDataNum  = this.props.CalendarData.dataNum+1;
		let period      = this.props.CalendarData.period;
		let duration    = this.props.CalendarData.duration;
		let nextStart   = this.state.CalendarData.nextStart;
		let nextEnd     = this.state.CalendarData.nextEnd;
		let newDuration = this.calculateDays(nextStart,nextEnd)+1;
		let newPeriod   = this.calculateDays(lastStart,nextStart);
		
		if( newPeriod <= 14 ) alert(`period = ${newPeriod} !?!? go and see a doctor@@`)
		else {
				fetch('homepage/save', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					account: this.props.CalendarData.account,
					password: this.props.CalendarData.password,
					period: (dataNum*period+newPeriod)/(newDataNum),
					duration: (dataNum*duration+newDuration)/(newDataNum),
					dataNum: newDataNum,
					lastStart: nextStart,
					lastEnd: nextEnd
				})
			})
		}
	}
	handleClear=()=>{
		fetch('homepage/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				account: this.props.CalendarData.account,
			})
		})
	}
	render(){
        return(
			<div id="wrapper">
          		<header id="header" >
					<div className="content">
						<div className="inner" style={{padding:"0vh 96vw 95.8vh 0vw"}}>
							<div style={{width:"96vw",
							 	height:"95.8vh",
								padding:"3vh 1vw"}}>
								<div style={{width:"94vw",
								 	 		 height:"10vh",
									 		 display:"flex",
									 		 flexDirection: "row-reverse"}}>
									<HomepageButtons handleSave={this.handleSave}
													 handleClear={this.handleClear}/>
									<h1 style={{margin:'0rem 3rem'}}>{'Hello! '+this.props.CalendarData.account}</h1>
								</div>
								<div style={{display:'flex', margin:'15vh 0px 0px 0px', flexDirection: "row-reverse"}}>
									<div style={{width:"94vw",
									 	 		 height:"10vh",
										 		 display:"flex",
										 		 flexDirection: "row-reverse",
										 		 margin:'25px 0px 0px 0px'}}>
										 <Datepicker setDate={this.handleDateChange}/>
									</div>
									<div >
										<Readonly period={this.state.period}
												  CalendarTime={this.state.CalendarData.period}/>
									</div>
								</div>
							</div>
					    </div>
				   	</div>
		    	</header>
			</div>
        );
    }
}

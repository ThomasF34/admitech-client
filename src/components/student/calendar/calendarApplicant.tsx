import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, DateNavigator, TodayButton} from '@devexpress/dx-react-scheduler-material-ui';

const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
  //TODO : MON ENTRETIEN + console.log
  if (props.data.title == "MON ENTRETIEN") {
    return <Appointments.Appointment {...props} onClick={()=>console.log(props.data)} style={{ backgroundColor: '#0F00FF' }} />;
  }
  return <Appointments.Appointment {...props} onClick={()=>console.log(props.data)} />;
};

interface IProps {}

interface IState {
    data: Array<AppointmentModel>,
}

class CalendarApplicant extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      //TODO
      data: this.getAvailableAppointments().concat(this.getAppointmentApplicant())
    }

    this.getAvailableAppointments = this.getAvailableAppointments.bind(this);
    this.getAppointmentApplicant = this.getAppointmentApplicant.bind(this);
    this.getMinAppointmentAvailable = this.getMinAppointmentAvailable.bind(this);
    this.getMaxAppointmentAvailable = this.getMaxAppointmentAvailable.bind(this);
  }

  //TODO
  getAvailableAppointments(): Array<AppointmentModel> {
    return [
      { startDate: '2019-11-18 18:00', endDate: '2019-11-18 19:30', title: 'RDV1' },
      { startDate: '2019-11-18 11:00', endDate: '2019-11-18 12:30', title: 'RDV2' },
      { startDate: '2019-11-25 11:00', endDate: '2019-11-25 12:30', title: 'RDV3' }
    ]
  }

  //TODO
  getAppointmentApplicant() : AppointmentModel {
    return { startDate: '2019-11-26 10:00', endDate: '2019-11-26 11:00', title: 'MON ENTRETIEN' }
  }

  //TODO
  getMinAppointmentAvailable(): AppointmentModel {
    let appointments = this.getAvailableAppointments();
    let sortedAppointments = appointments.sort(  (elem1,elem2) => {
      if (new Date(elem1.startDate).getTime()>new Date(elem2.startDate).getTime()) return 1
      else if (new Date(elem1.startDate).getTime()<new Date(elem2.startDate).getTime()) return -1
      else return 0
    })
    return sortedAppointments[0]
  }

  //TODO
  getMaxAppointmentAvailable(): AppointmentModel {
    let appointments = this.getAvailableAppointments();
    let sortedAppointments = appointments.sort(  (elem1,elem2) => {
      if (new Date(elem1.startDate).getTime()<new Date(elem2.startDate).getTime()) return 1
      else if (new Date(elem1.startDate).getTime()>new Date(elem2.startDate).getTime()) return -1
      else return 0
    })
    return sortedAppointments[0]
  }

  render() {
    return (
      <Paper>
        <Scheduler
          data={this.state.data}
          height={660}
          locale='fr-FR'
        >
          <ViewState
            defaultCurrentDate={this.getAppointmentApplicant().startDate} //TODO
          />

          <WeekView
            excludedDays={[0, 6]}
            startDayHour={7}
            endDayHour={20}
          />

          <Toolbar />
          <DateNavigator />

          <Appointments 
            appointmentComponent={Appointment}
          />

        </Scheduler>
      </Paper>
    );
  }
}

export default CalendarApplicant;
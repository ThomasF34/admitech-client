import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';

const user_id = 1; //TODO

const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
  //TODO : + console.log
  if (props.data.title === "MON ENTRETIEN") {
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
      data: this.getAvailableAppointments().concat(this.getAppointmentApplicant(user_id))
    }

    this.getAvailableAppointments = this.getAvailableAppointments.bind(this);
    this.getAppointmentApplicant = this.getAppointmentApplicant.bind(this);
    this.getMinAppointmentAvailable = this.getMinAppointmentAvailable.bind(this);
  }

  //TODO
  getAvailableAppointments(): Array<AppointmentModel> {
    return [
      { startDate: '2019-12-3 18:00', endDate: '2019-12-3 19:30', title: 'RDV1' },
      { startDate: '2019-12-3 11:00', endDate: '2019-12-3 12:30', title: 'RDV2' },
      { startDate: '2019-12-1 11:00', endDate: '2019-12-1 12:30', title: 'RDV3' }
    ]
  }

  getAppointmentApplicant(idApplicant: number) : AppointmentModel {
    if (1 === user_id) { //TODO TEST IF APPLICANT HAS AN EXISTING APPOINTMENT
      return { startDate: '2019-11-26 10:00', endDate: '2019-11-26 11:00', title: 'MON ENTRETIEN' } //TODO RETURN APPOINTMENT
    }
    return { startDate:'', endDate:'' }
  }

  getMinAppointmentAvailable(appointments: Array<AppointmentModel>): AppointmentModel {
    if (appointments.length !== 0) {
      let sortedAppointments = appointments.sort( (elem1,elem2) => {
        if (new Date(elem1.startDate).getTime() > new Date(elem2.startDate).getTime()) return 1
        else if (new Date(elem1.startDate).getTime() < new Date(elem2.startDate).getTime()) return -1
        else return 0
      })
      return sortedAppointments[0]
    }
    else return { startDate:'', endDate:'' }
  }

  getDefaultCurrentDate(idApplicant: number, appointments: Array<AppointmentModel>) : AppointmentModel {
    if (this.getAppointmentApplicant(idApplicant).startDate !== '') return this.getAppointmentApplicant(idApplicant)
    else if (this.getMinAppointmentAvailable(appointments).startDate !== '') return this.getMinAppointmentAvailable(appointments)
    else return { startDate: new Date(), endDate: new Date() }
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
            defaultCurrentDate={this.getDefaultCurrentDate(user_id, this.getAvailableAppointments()).startDate}
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
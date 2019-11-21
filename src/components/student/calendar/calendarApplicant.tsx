import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
import { assignMySlot } from'../../../services/student/calendar/application.service';

const user_id = 1; //TODO

const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
  if (props.data.title === "MON ENTRETIEN") {
    return <Appointments.Appointment style={{ backgroundColor: '#3F2EE3' }} {...props} onClick={ async () =>
      await assignMySlot(user_id, props.data.id)
    }
    />;
  }
  return <Appointments.Appointment {...props} onClick={()=>console.log(props.data)} />;
};

interface IProps {
  listAppointments: Array<AppointmentModel>,
  applicantAppointment: AppointmentModel
}

interface IState {
    data: Array<AppointmentModel>,
}

class CalendarApplicant extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: this.props.listAppointments.concat(this.props.applicantAppointment)
    }
    this.getMinAppointmentAvailable = this.getMinAppointmentAvailable.bind(this);
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

  getDefaultCurrentDate(appointments: Array<AppointmentModel>) : AppointmentModel {
    if (this.props.applicantAppointment.startDate !== '') return this.props.applicantAppointment
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
            defaultCurrentDate={this.getDefaultCurrentDate(this.props.listAppointments).startDate}
          />

          <WeekView
            excludedDays={[0, 6]}
            startDayHour={8}
            endDayHour={19}
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
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';

const Appointment: React.ComponentType<Appointments.AppointmentProps> = (props) => {
  if (props.data.title === "Disponible") {
    return <Appointments.Appointment style={{ backgroundColor: '#00d142' }} {...props} />;
  }
  return <Appointments.Appointment style={{ backgroundColor: '#d10e00' }} {...props} />;
};

interface IProps {
  listSlots: Array<AppointmentModel>,
}

class CalendarAdministration extends React.PureComponent<IProps> {
  render() {
    return (
      <Paper>
        <Scheduler
          data={this.props.listSlots}
          height={660}
          locale='fr-FR'
        >
          <ViewState
            defaultCurrentDate={new Date()}
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

export default CalendarAdministration;
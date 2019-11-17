import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, Toolbar, DateNavigator, TodayButton} from '@devexpress/dx-react-scheduler-material-ui';

interface IProps {}

interface IState {
    data: any,
}

class CalendarApplicant extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data:[
        { startDate: '2019-11-18 10:00', endDate: '2019-11-18 11:00', title: 'Meeting' },
        { startDate: '2019-11-18 18:00', endDate: '2019-11-18 19:30', title: 'Go to a gym' },
        { startDate: '2019-11-18 11:00', endDate: '2019-11-18 12:30', title: 'Go to a gym' },
        { startDate: '2019-11-25 11:00', endDate: '2019-11-25 12:30', title: 'Gym' }
      ]
    }
  }

  render() {
    return (
      <Paper>
        <Scheduler
          data={this.state.data}
          height={660}
        >
          <ViewState
            defaultCurrentDate="2019-11-18"
          />

          <WeekView
            excludedDays={[0, 6]}
            startDayHour={7}
            endDayHour={20}
          />

          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />

        </Scheduler>
      </Paper>
    );
  }
}

export default CalendarApplicant;
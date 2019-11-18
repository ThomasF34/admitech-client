import React from 'react';
import CalendarApplicant from './calendarApplicant';

class CalendarContainer extends React.Component {
    render() {
        return (
            <div>
                <div> MON RDV </div>
                <div> PLAGE </div>
                <CalendarApplicant />
            </div>

        )
    }
}

export default CalendarContainer;
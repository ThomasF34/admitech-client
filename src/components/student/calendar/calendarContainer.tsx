import React from 'react';
import CalendarApplicant from './calendarApplicant';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import {months} from "../../utils/months";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/calendar.css';

const user_id = 1;

class CalendarContainer extends React.Component {

    //TODO
    getAvailableAppointments = (): Array<AppointmentModel> => {
        return [
          { startDate: '2019-12-3 18:00', endDate: '2019-12-3 19:30', title: 'Entretien Disponible 1' },
          { startDate: '2019-12-3 11:00', endDate: '2019-12-3 12:30', title: 'Entretien Disponible 2' },
          { startDate: '2019-12-1 11:00', endDate: '2019-12-1 12:30', title: 'Entretien Disponible 3' }
        ]
    }

    //TODO
    getAppointmentApplicant = (idApplicant: number) : AppointmentModel => {
        if (1 === user_id) { //TODO TEST IF APPLICANT HAS AN EXISTING APPOINTMENT
          return { startDate: '26 novembre 2019 de 10h à 11h', endDate: '2019-11-26 11:00', title: 'MON ENTRETIEN' } //TODO RETURN APPOINTMENT
        }
        return { startDate:'', endDate:'' }
    }
    
    getMinAppointmentAvailable = (appointments: Array<AppointmentModel>): AppointmentModel => {
        if (appointments.length !== 0) {
          let sortedAppointments = appointments.sort( (elem1,elem2) => {
            if (new Date(elem1.startDate).getTime() > new Date(elem2.startDate).getTime()) return 1
            else if (new Date(elem1.startDate).getTime() < new Date(elem2.startDate).getTime()) return -1
            else return 0
          })
          let dateStart = (new Date(sortedAppointments[0].startDate).getDay()+1) + ' ' + months.get(new Date(sortedAppointments[0].startDate).getMonth()+1) + ' ' + new Date(sortedAppointments[0].startDate).getFullYear();
          return {startDate: dateStart, endDate: ''}
        }
        else return { startDate:'', endDate:'' }
    }

    getMaxAppointmentAvailable = (appointments: Array<AppointmentModel>): AppointmentModel => {
        if (appointments.length !== 0) {
          let sortedAppointments = appointments.sort( (elem1,elem2) => {
            if (new Date(elem1.startDate).getTime() < new Date(elem2.startDate).getTime()) return 1
            else if (new Date(elem1.startDate).getTime() > new Date(elem2.startDate).getTime()) return -1
            else return 0
          })
          let dateStart = (new Date(sortedAppointments[0].startDate).getDay()+1) + ' ' + months.get(new Date(sortedAppointments[0].startDate).getMonth()+1) + ' ' + new Date(sortedAppointments[0].startDate).getFullYear();
          return {startDate: dateStart, endDate: ''}
        }
        else return { startDate:'', endDate:'' }
    }

    render() {
        return (
            <div id='card-title-calendar-container'>
                {
                    this.getAppointmentApplicant(user_id).startDate !== '' 
                    ? (
                        <h5>
                            
                            Votre entretien est programmé pour le <span id="span-calendar-container"> {this.getAppointmentApplicant(user_id).startDate} </span> .
                        
                        </h5>
                    ) 
                    : (
                        <h5>
                            {
                                'Aucun rendez-vous n\'est programmé pour le moment. Cliquez sur un créneau pour vous y inscrire.'
                            }
                        </h5>
                    )
                }
                {
                    this.getMinAppointmentAvailable(this.getAvailableAppointments()).startDate !== '' 
                    ? (
                        <h6> 
                            {
                                'Les rendez-vous s\'étendent de la période du ' +
                                this.getMinAppointmentAvailable(this.getAvailableAppointments()).startDate
                                + ' au ' +
                                this.getMaxAppointmentAvailable(this.getAvailableAppointments()).startDate
                                + '.'
                            }   
                        </h6>
                    )
                    : (
                        <h6>
                            {
                                'Aucun créneau n\'est disponible pour le moment.'
                            }
                        </h6>
                    )
                } 
                <CalendarApplicant listAppointments={this.getAvailableAppointments()} />
            </div>

        )
    }
}

export default CalendarContainer;
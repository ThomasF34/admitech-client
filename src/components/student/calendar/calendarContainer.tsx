import React from 'react';
import CalendarApplicant from './calendarApplicant';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import {months} from "../../utils/months";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/student/calendar/calendar.css';
import { getAvailableSlots, getMySlot } from'../../../services/student/calendar/application.service';

const user_id = 1; //todo
const formation = "do"; //todo

interface IProps {

}

interface IState {
    slotApplicant: AppointmentModel,
    listAvailableSlots: Array<AppointmentModel>
}

class CalendarContainer extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            slotApplicant: {startDate: '', endDate: ''},
            listAvailableSlots: []
        }

        this.getAvailableAppointments = this.getAvailableAppointments.bind(this);
        this.getAppointmentApplicant = this.getAppointmentApplicant.bind(this);

        this.getAvailableAppointments(formation);
        this.getAppointmentApplicant(user_id);
    }

    getAvailableAppointments = async (formation: string): Promise<void> => {
        let availableAppointments = (await getAvailableSlots(formation)).data;
        if (availableAppointments.length !== 0) {
            let availableSlots = new Array<AppointmentModel>();
            availableAppointments.filter((elem: any) => elem !== undefined).map( (elem: any) => 
                availableSlots = availableSlots.concat({startDate: elem.begining_hour, endDate: elem.ending_hour, id: elem.id, title: 'Entretien disponible'})
            )
            this.setState({listAvailableSlots: availableSlots})
        }
    }

    getAppointmentApplicant = async (idApplicant: number) : Promise<void> => {
        let appointmentApplicant = (await getMySlot(user_id)).data;

        if (appointmentApplicant.candidature_id !== undefined) { 
            let slot = { startDate: appointmentApplicant.begining_hour, endDate: appointmentApplicant.ending_hour, id: appointmentApplicant.id, title: 'MON ENTRETIEN' }
            this.setState({slotApplicant: slot})
        }
    }
    
    getMinAppointmentAvailable = (appointments: Array<AppointmentModel>): AppointmentModel => {
        if (appointments.length !== 0) {
          let sortedAppointments = appointments.sort( (elem1,elem2) => {
            if (new Date(elem1.startDate).getTime() > new Date(elem2.startDate).getTime()) return 1
            else if (new Date(elem1.startDate).getTime() < new Date(elem2.startDate).getTime()) return -1
            else return 0
          })
          let dateStart = (new Date(sortedAppointments[0].startDate).getDate()) + ' ' + months.get(new Date(sortedAppointments[0].startDate).getMonth()+1) + ' ' + new Date(sortedAppointments[0].startDate).getFullYear();
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
          let dateStart = (new Date(sortedAppointments[0].startDate).getDate()) + ' ' + months.get(new Date(sortedAppointments[0].startDate).getMonth()+1) + ' ' + new Date(sortedAppointments[0].startDate).getFullYear();
          return {startDate: dateStart, endDate: ''}
        }
        else return { startDate:'', endDate:'' }
    }

    render() {
        return (
            <div id='card-title-calendar-container'>
                {
                    this.state.slotApplicant.startDate !== '' 
                    ? (
                        <h5>
                            
                            Votre entretien est programmé pour le 
                            <span id="span-calendar-container"> 
                            {
                                ' ' + new Date(this.state.slotApplicant.startDate).getDate() + ' ' + months.get(new Date(this.state.slotApplicant.startDate).getMonth()+1) + ' ' + new Date(this.state.slotApplicant.startDate).getFullYear() + ' ' + (new Date(this.state.slotApplicant.startDate).getHours()-1) + ':' + new Date(this.state.slotApplicant.startDate).getMinutes() + '.'
                            } 
                            </span>
                        
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
                    this.getMinAppointmentAvailable(this.state.listAvailableSlots).startDate !== '' 
                    ? (
                        <h6> 
                            {
                                'Les rendez-vous s\'étendent de la période du ' +
                                this.getMinAppointmentAvailable(this.state.listAvailableSlots).startDate
                                + ' au ' +
                                this.getMaxAppointmentAvailable(this.state.listAvailableSlots).startDate
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
                <CalendarApplicant listAppointments={this.state.listAvailableSlots} applicantAppointment={this.state.slotApplicant} />
            </div>

        )
    }
}

export default CalendarContainer;
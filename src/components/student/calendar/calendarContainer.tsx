import React from 'react';
import CalendarApplicant from './calendarApplicant';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import {months} from "../../utils/months";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/student/calendar/calendar.css';
import { getAvailableSlots, getMySlot } from'../../../services/student/calendar/application.service';
import InfoPopUpCalendar from '../../helpers/InfoPopUpCalendar';

const formation = "se"; //TODO

interface IProps {

}

interface IState {
    slotApplicant: AppointmentModel,
    listAvailableSlots: Array<AppointmentModel>,
}

class CalendarContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            slotApplicant: {startDate: '', endDate: ''},
            listAvailableSlots: [],
        }
        this.getUserId =this.getUserId.bind(this);
        this.getAvailableAppointments = this.getAvailableAppointments.bind(this);
        this.getAppointmentApplicant = this.getAppointmentApplicant.bind(this);

        this.getAvailableAppointments(formation);
        this.getAppointmentApplicant(this.getUserId());
    }

    getUserId() {
        return +window.location.href.split('/')[window.location.href.split('/').length-1];
    }

    async getAvailableAppointments(formation: string) {
        let availableAppointments = (await getAvailableSlots(formation)).data;
        if (availableAppointments.length !== 0) {
            let availableSlots = new Array<AppointmentModel>();
            availableAppointments.filter((elem: any) => elem !== undefined).map( (elem: any) => 
                availableSlots = availableSlots.concat({
                    startDate: new Date(new Date(elem.begining_hour).setHours(new Date(elem.begining_hour).getHours() - 1)), 
                    endDate: new Date(new Date(elem.ending_hour).setHours(new Date(elem.ending_hour).getHours() - 1)), 
                    id: elem.id, 
                    title: 'Entretien disponible'})
            )
            this.setState({listAvailableSlots: availableSlots})
        }
    }

    async getAppointmentApplicant(idApplicant: number) {
        let appointmentApplicant = (await getMySlot(this.getUserId())).data;
        if (appointmentApplicant.begining_hour !== undefined) {
            let slot = { 
                startDate: new Date(new Date(appointmentApplicant.begining_hour).setHours(new Date(appointmentApplicant.begining_hour).getHours() - 1)), 
                endDate: new Date(new Date(appointmentApplicant.ending_hour).setHours(new Date(appointmentApplicant.ending_hour).getHours() - 1)), 
                id: appointmentApplicant.id, 
                title: 'MON ENTRETIEN' }
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
            this.state.slotApplicant.startDate === '' 
            ? (
                <div id='card-title-calendar-container'>
                    <h5>
                        {
                            'Aucun rendez-vous n\'est programmé pour le moment. Cliquez sur un créneau pour vous y inscrire.'
                        }
                    </h5>

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
                    {
                        this.state.listAvailableSlots.length !== 0 
                        ?   (
                            <CalendarApplicant applicantAppointment={this.state.slotApplicant} listAppointments={this.state.listAvailableSlots} />
                        )
                        : (null)
                    }
                </div>
            )
            : (
                <InfoPopUpCalendar 
                    title = 'Vous avez déjà un entretien' 
                    content = { `Programmé pour le ${new Date(this.state.slotApplicant.startDate).getDate() + ' ' + months.get(new Date(this.state.slotApplicant.startDate).getMonth()+1) + ' ' + new Date(this.state.slotApplicant.startDate).getFullYear() + ' ' + (new Date(this.state.slotApplicant.startDate).getHours()) + ':' + new Date(this.state.slotApplicant.startDate).getMinutes()}` }
                />
            )
        )
    }
}

export default CalendarContainer;
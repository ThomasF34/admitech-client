import { IFields } from "../../components/student/createApplicationPage/createApplicationForm";

class Application implements IFields {

  public first_name?: string;
  public last_name?: string;
  public phone?: string;
  public nationnality?: string;
 // public birth_date?: Date;
  public birth_place?: string;
  /*public family_status?: string;
  public address?: string;
  public postal_code?: string;
  public city?: string;
  public state?: string*/

  constructor(application:IFields) {
    this.first_name = application.first_name 
    this.last_name = application.last_name 
    this.phone = application.phone
    this.nationnality = application.nationnality === undefined ? null : application.nationnality;
    this.birth_place = application.birth_place === undefined ? null : application.birth_place;
  }
};

export default Application;
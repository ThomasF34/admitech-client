import { IFields } from "../../components/student/createApplicationPage/createApplicationForm";

class Attachments {

  public attach_type: string | null;
  public key: string | null;
  constructor(attach_type?: string, key?: string) {
    this.attach_type = attach_type === undefined ? null : attach_type
    this.key = key === undefined ? null : key
  }
}

export class Experiences {

  public degree: boolean | null;
  public facility_name: string | null;
  public facility_place: string | null;
  public mean: number | null;
  public name: string | null;
  public ranking: string | null;
  public rating: string | null;
  public year: string | null;

  constructor(degree?: boolean, facility_name?: string, facility_place?: string, mean?: number, name?: string, ranking?: string, rating?: string, year?: string) {
    this.degree = degree === undefined ? null : degree
    this.facility_name = facility_name === undefined ? null : facility_name
    this.facility_place = facility_place === undefined ? null : facility_place
    this.mean = mean === undefined ? null : mean
    this.name = name === undefined ? null : name
    this.ranking = ranking === undefined ? null : ranking
    this.rating = rating === undefined ? null : rating
    this.year = year === undefined ? null : year
  }
}
class Application implements IFields {

  /*public first_name?: string;
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

  public address: string | null;
  public admin_comment: string | null;
  public attachments: [Attachments];
  public bac_mention: string | null;
  public bac_name: string | null;
  public bac_realname: string | null;
  public bac_year: number | null;
  public birth_date: Date | null;
  public birth_place: string | null;
  public branch: string | null;
  public candidate_comment: string | null;
  public certified: boolean | null;
  public certified_at: Date | null; ///// à garder ?
  public city: boolean | null;
  public experiences: [Experiences];
  public family_status: string | null;
  public first_lang_level: string | null;
  public first_lang_name: string | null;
  public first_name: string | null;
  public internships: string | null;
  public it_knowledge: string | null;
  public last_facility_address: string | null;
  public last_facility_city: string | null;
  public last_facility_name: string | null;
  public last_facility_postal_code: string | null;
  public last_facility_state: string | null;
  public last_name: string | null;
  public nationnality: string | null;
  public native_lang_name: string | null;
  public other_apply: boolean | null;
  public other_apply_apprentise: string | null;
  public other_apply_name: string | null;
  public other_apply_place: string | null;
  public phone: string | null;
  public postal_code: string | null;
  public second_lang_level: string | null;
  public second_lang_name: string | null;
  public sports_interests: string | null;
  public state: string | null;
  public status: string | null;
  public strengths: string | null;
  public third_lang_level: string | null;
  public third_lang_name: string | null;
  public travels: string | null;
  public draft: boolean;


  constructor(application: IFields, isDraft: boolean) {
    this.draft = isDraft
    this.address = application.address === undefined ? null : application.address;
    this.admin_comment = application.admin_comment === undefined ? null : application.admin_comment;
    this.attachments = application.attachments === undefined ? [] : application.attachments;
    this.bac_mention = application.bac_mention === undefined ? null : application.bac_mention;
    this.bac_name = application.bac_name === undefined ? null : application.bac_name;
    this.bac_realname = application.bac_realname === undefined ? null : application.bac_realname;
    this.bac_year = application.bac_year === undefined ? null : application.bac_year;
    this.birth_date = application.birth_date === undefined ? null : application.birth_date;
    this.birth_place = application.birth_place === undefined ? null : application.birth_place;
    this.branch = application.branch === undefined ? null : application.branch;
    this.candidate_comment = application.candidate_comment === undefined ? null : application.candidate_comment;
    this.certified = application.certified === undefined ? null : application.certified;
    this.certified_at = application.certified_at === undefined ? null : application.certified_at;
    this.city = application.city === undefined ? null : application.city;
    this.experiences = application.experiences === undefined ? [] : application.experiences;
    this.family_status = application.family_status === undefined ? null : application.family_status;
    this.first_lang_level = application.first_lang_level === undefined ? null : application.first_lang_level;
    this.first_lang_name = application.first_lang_name === undefined ? null : application.first_lang_name;
    this.first_name = application.first_name === undefined ? null : application.first_name;
    this.internships = application.internships === undefined ? null : application.internships;
    this.it_knowledge = application.it_knowledge === undefined ? null : application.it_knowledge;
    this.last_facility_address = application.last_facility_address === undefined ? null : application.last_facility_address;
    this.last_facility_city = application.last_facility_city === undefined ? null : application.last_facility_city;
    this.last_facility_name = application.last_facility_name === undefined ? null : application.last_facility_name;
    this.last_facility_postal_code = application.last_facility_postal_code === undefined ? null : application.last_facility_postal_code;
    this.last_facility_state = application.last_facility_state === undefined ? null : application.last_facility_state;
    this.last_name = application.last_name === undefined ? null : application.last_name;
    this.nationnality = application.nationnality === undefined ? null : application.nationnality;
    this.native_lang_name = application.native_lang_name === undefined ? null : application.native_lang_name;
    this.other_apply = application.other_apply === undefined ? null : application.other_apply;
    this.other_apply_apprentise = application.other_apply_apprentise === undefined ? null : application.other_apply_apprentise;
    this.other_apply_name = application.other_apply_name === undefined ? null : application.other_apply_name;
    this.other_apply_place = application.other_apply_place === undefined ? null : application.other_apply_place;
    this.phone = application.phone === undefined ? null : application.phone;
    this.postal_code = application.postal_code === undefined ? null : application.postal_code;
    this.second_lang_level = application.second_lang_level === undefined ? null : application.second_lang_level;
    this.second_lang_name = application.second_lang_name === undefined ? null : application.second_lang_name;
    this.sports_interests = application.sports_interests === undefined ? null : application.sports_interests;
    this.state = application.state === undefined ? null : application.state;
    this.status = application.status === undefined ? null : application.status;
    this.strengths = application.strengths === undefined ? null : application.strengths;
    this.third_lang_level = application.third_lang_level === undefined ? null : application.third_lang_level;
    this.third_lang_name = application.third_lang_name === undefined ? null : application.third_lang_name;
    this.travels = application.travels === undefined ? null : application.travels;


  }

};

export default Application;
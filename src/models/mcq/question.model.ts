import Response from './response.model'
class Question {

  public id!: number;
  public title!: string;
  public responses!: Response[];

};

export default Question;
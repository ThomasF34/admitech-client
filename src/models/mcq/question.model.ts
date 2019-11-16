import Response from './response.model'
class Question {

  public idQuestion!: number;
  public title!: string;
  public responses!: Response[];

};

export default Question;
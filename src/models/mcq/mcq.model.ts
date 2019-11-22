import Question from './question.model'

class Mcq {
  public idMcq?: number;
  public title!: string;
  public origin!: string;
  public formation!: string;
  public year?: number;
  public questions!: Question[];
};

export default Mcq;
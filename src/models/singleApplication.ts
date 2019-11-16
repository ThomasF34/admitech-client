class SingleApplication {

    public NOM!: string;
    public FORMATION!: string;
    public ETAT!: number;
    public JURY!: Array<string>;
    public NOTE!: number;
    public QCM!: string;
  
    constructor(NOM: string, FORMATION: string, ETAT: number, JURY: Array<string>, NOTE: number, QCM: string) {
      this.NOM = NOM;
      this.FORMATION = FORMATION;
      this.ETAT = ETAT;
      this.JURY = JURY;
      this.NOTE = NOTE;
      this.QCM = QCM;
    }
  };
  
  export default SingleApplication;
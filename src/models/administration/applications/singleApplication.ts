class SingleApplication {
  public ID: number;
  public NOM: string;
  public FORMATION: string;
  public ETAT: number;
  public JURY: Array<string> | undefined;
  public NOTE: number | undefined;
  public QCM: string | undefined;

  constructor(ID: number, NOM: string, FORMATION: string, ETAT: number, JURY: Array<string>|undefined, NOTE: number|undefined, QCM: string|undefined) {
    this.ID = ID;
    this.NOM = NOM;
    this.FORMATION = FORMATION;
    this.ETAT = ETAT;
    this.JURY = JURY;
    this.NOTE = NOTE;
    this.QCM = QCM;
  }
};
  
export default SingleApplication;
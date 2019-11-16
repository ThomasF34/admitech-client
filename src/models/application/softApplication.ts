
class SoftApplication {

  public id: string;
  public branch: string;
  public status: string;


  constructor(id: string, branch: string, status: string) {
    this.id = id
    this.branch = branch
    this.status = status
  }
};

export default SoftApplication;
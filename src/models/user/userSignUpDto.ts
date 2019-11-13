class UserSignUpDto {

  public email!: string;
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public role!: string;

  constructor(email: string, firstname: string, lastname: string, password: string, role: string) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.role = role;
  }
};

export default UserSignUpDto;
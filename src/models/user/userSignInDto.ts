class UserSignInDto {

  public login!: string;
  public password!: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
};

export default UserSignInDto;
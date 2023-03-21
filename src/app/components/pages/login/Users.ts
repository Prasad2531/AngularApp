export class Users {    //class for users.
  uname!: string | null;
  email!: string | null;
  pwd!: string | null;

  constructor(uname: string | null, email: string | null, pwd: string | null) {
      this.uname = uname;
      this.email = email;
      this.pwd = pwd;
  }
}

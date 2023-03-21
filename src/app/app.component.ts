import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from './components/pages/login/Users';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Website';
  boolLoginSuccess = true;
  boolLogin = true;
  cartQuantity=0;
  constructor(cartService:CartService, private router: Router){
    cartService.getCart().subscribe((newCart)=>
    this.cartQuantity=newCart.totalCount);
  }

  strLoginUname = new FormControl('');
  strLoginPwd = new FormControl('');
  strRegisterUname = new FormControl('');
  strRegisterEmail = new FormControl('');
  strRegisterPwd = new FormControl('');
  strRegisterRepeatPwd = new FormControl('');



  //users database.
  arrUsers = [
    new Users('admin', 'admin@wissen.com', 'admin'),
    new Users('prasad', 'prasad@wissen.com', 'prasad'),
  ];

  submitLogin() {
    let obj: any = this.arrUsers.find(
      (o) => o.uname === this.strLoginUname.value
    );

    if (obj != null && this.strLoginPwd.value === obj.pwd) {
      // alert('Logged In Successfully');
      this.boolLoginSuccess = false;
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Crediantials');
    }
  }
  displayLogin() {
    this.boolLogin = true;
  }

  displayRegister() {
    this.boolLogin = false;
  }
  submitRegister() {
    if (
      this.strRegisterUname.value != '' &&
      this.strRegisterEmail.value != '' &&
      this.strRegisterPwd.value != '' &&
      this.strRegisterPwd.value === this.strRegisterRepeatPwd.value
    ) {
      this.arrUsers.push(
        new Users(
          this.strRegisterUname.value,
          this.strRegisterEmail.value,
          this.strRegisterPwd.value
        )
      );
      alert('Register Successfully');
      this.displayLogin();
    } else {
      alert('Please Enter Valid Info');
    }
  }
  logOut(){
    this.boolLoginSuccess=true;
  }
}

import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private e:UserServiceService){ }

    userLogin(data: any) {
      console.log(data);
      this.e.login(data);
    }

}

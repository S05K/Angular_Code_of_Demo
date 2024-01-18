import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {



    constructor(private el:UserServiceService)
    {

    }

     

reset(val: any) {
  this.el.reset_password(val).subscribe((value)=>{
  console.log(value);
  })
}

}

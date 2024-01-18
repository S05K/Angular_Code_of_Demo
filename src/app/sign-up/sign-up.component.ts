import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

      oncreate(val: NgForm)
      {
      // console.log(val);
        this.el.createUser(val).subscribe((ans)=>{
          console.log(ans);
          alert("User is created")
          this.router.navigate(['/home'])
        })
      }

      constructor(private http:HttpClient, private el:UserServiceService, private router:Router)
      {

      }

}

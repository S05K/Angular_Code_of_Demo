import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    book(id:any)
     {
        console.log("Log in");
        console.log(id);
        this.routes.navigate(['/theatre/',id]);
     }

  movies:any;

  constructor(private ab:UserServiceService, private routes:Router)
  {

  }

  ngOnInit(): void {
   this.get_movies();
  }

 get_movies()
 {
  this.movies = this.ab.movies_list().subscribe((val)=>{
    this.movies = val;
    console.log(this.movies);
   })
 }

}

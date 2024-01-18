import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {


  seat(id: any) {
  console.log(id);
  this.route.navigate(['/seat', id])
  }
  
  show:any;
  constructor(private active:ActivatedRoute, private service:UserServiceService, private datepipe:DatePipe, private route:Router)
  {

  } 
  ngOnInit(): void {
    let id=this.active.snapshot.paramMap.get('id')
    console.log(id);
    this.service.get_shows(id).subscribe((res)=>{
       this.show=res;
      console.log(this.show);
      
    })
     }



}

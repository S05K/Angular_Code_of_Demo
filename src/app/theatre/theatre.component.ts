import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit{
    
  
    check_shows(id: any) {
      console.log("done...", id);
      this.route.navigate(['/show/', id]);
    }

  theatres:any;
  
  constructor(private c:UserServiceService, private child:HomeComponent, private activate:ActivatedRoute, private route:Router)
  {

  }
    // id:any;
    ngOnInit(): void {
    let id=this.activate.snapshot.paramMap.get('id')
    console.log(id);
    this.c.get_theatre(id).subscribe((val)=>{
      this.theatres = val;
      console.log(this.theatres);
      })
  }

  

}

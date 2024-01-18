import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit{

  

  selcted_seats()
  {
    const selectedSeatIds = Object.values(this.seats)
    .filter((seat:any) => seat.selected)
    .map((seat:any) => seat.id);
    console.log('Selected Seat IDs:', selectedSeatIds);

    let id=this.active.snapshot.paramMap.get('id')
    console.log("Show Id",id);
    
    this.r.navigate(['/payment/', id,selectedSeatIds.join(',')])
    

    // this.r.navigate(['/payment'])
    
  }


  onSeatClick(id: any) {
    console.log(id);
    id.selected = !id.selected;
    }

  seats:any;

  constructor(private a:ActivatedRoute, private s:UserServiceService, private active:ActivatedRoute, private r:Router)
  {

  }


  ngOnInit(): void {
  let id=this.a.snapshot.paramMap.get('id')
  console.log(id);
  this.s.get_seats(id).subscribe((val)=>{
    this.seats = val;
    console.log(this.seats);
    })
  }

}

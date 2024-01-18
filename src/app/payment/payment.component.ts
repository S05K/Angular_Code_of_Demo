import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  
  amount(data: NgForm)
   {
      console.log("Payy...");
      console.log(data);
      
   }

   total:any;
   ngOnInit(): void 
   {

    let id=this.active.snapshot.paramMap.get('id')
    console.log("Show Id",id);

    // let paramMap = this.active.snapshot.paramMap;
    // console.log("ParamMap:", paramMap);

    const show_id  = id
    

    const seatIds = this.active.snapshot.paramMap.get('seat_ids');
    const selectedSeatIds: number[] = seatIds ? seatIds.split(',').map(Number) : [];
   
  
  
    this.el.pay_total(show_id,selectedSeatIds).subscribe((val)=>{
      this.total = val;
      console.log(this.total);
      
    })
   

  }
  constructor(private el:UserServiceService, private active:ActivatedRoute)
  {
    
  }

  

}



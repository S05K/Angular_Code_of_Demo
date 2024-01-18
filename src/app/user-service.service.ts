import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient, private router:Router) { }
  
 

  createUser(data:any)
  {
  return   this.http.post('http://localhost:3000/users', data)
  }

  login(data:any)
  {
    this.http.post('http://localhost:3000/auth/login', data).subscribe((val:any)=>{
      localStorage.setItem("token",val.token)
      this.router.navigate(['/home'])
       })
  }

  reset_password(data:any)
  {
    return this.http.post('http://localhost:3000/password/reset', data)
  }

  movies_list()
  {
   return this.http.get('http://localhost:3000/movies')
  }

  get_theatre(id:any)
  {
    return this.http.get(`http://localhost:3000/movies/theatres_for_movie/${id}`)
  }
  get_shows(id:any)
  {
    return this.http.get(`http://localhost:3000/shows/index/${id}`)
  }
  get_seats(id:any)
  {
    return this.http.get(`http://localhost:3000/seats/hello/${id}`)
  }

  pay_total(show: any, seats_id: any[])
  {
    let data = {
      data: {
        attributes: {
          show_id: show,
          seat_ids: seats_id,
        },
      },
    };
  
    return this.http.post('http://localhost:3000/payments/calculate_amount',data)
  }

}
//http://localhost:3000/movies/theatres_for_movie/6
//payments/calculate_amount/:ids
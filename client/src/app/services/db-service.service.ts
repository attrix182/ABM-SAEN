import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DbServiceService {

  constructor(private http: HttpClient) { }

  API_URI = 'https://abm-saen.herokuapp.com/api';


  getitems() {
    return this.http.get(`${this.API_URI}/items`);
  }

  getitem(id: string) {
    return this.http.get(`${this.API_URI}/items/${id}`);
  }

  deleteitem(id: string) {



    return this.http.delete(`${this.API_URI}/items/${id}`, { responseType: 'text'});
  }

  saveitem(item: any) {



    return this.http.post(`${this.API_URI}/items`, item, { responseType: 'text'});

  }


  updateitem(id: string | number, updateditem: any): Observable<any> {
    return this.http.put(`${this.API_URI}/items/${id}`, updateditem);
  }

}

function CrossOrigin(arg0: string) {
  throw new Error('Function not implemented.');
}


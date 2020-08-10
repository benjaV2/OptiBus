import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = "http://localhost:8000"
  constructor(private http: HttpClient) { }

  
  getData() {
    let url = this.BASE_URL + "/data";
    return this.http.get(url)
  }
}

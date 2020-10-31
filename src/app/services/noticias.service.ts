import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    public http : HttpClient
  ) {
  
  }
  
  noticias() {
    return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-30&sortBy=publishedAt&apiKey=c9ec04c3350949e8acefa5bbb26828d1')
  }
  
}

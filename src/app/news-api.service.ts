import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = "9717c6a8f4c1463e8bb7b5e97f77d58e";

  constructor(private http:HttpClient) { }

  initSources(){

    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(){

    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }

  getArticlesByID(source: String){

    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=' +this.api_key);
  }
}

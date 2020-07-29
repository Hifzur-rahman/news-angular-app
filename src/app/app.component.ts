import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News App Angular';

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');

  }

  ngOnInit(){
    //load artices
    this.newsapi.initArticles().subscribe(data=> this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);

  }

  searchArticles(source){
    console.log("selected source is:" + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }




}

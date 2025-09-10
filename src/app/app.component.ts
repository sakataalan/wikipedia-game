import { Component, inject,Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { WikiService } from './services/wiki.service';
import { WikiRandom } from './models/wiki.model';
import { WikiPageResponse } from './models/wiki.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'wikipedia-game';
  private wikiService = inject(WikiService);

  constructor() {
    console.log(environment.api)
    this.getRandomId();
  }

  getRandomId() {
    this.wikiService.getRandomWikiId().subscribe((data: WikiRandom) => {
      const randomArticle = data.query.random[0];

      console.log('Random Article Title:', randomArticle.title); 
      console.log('Random Article ID:', randomArticle.id); 

      this.getWikiPage(randomArticle.id);
    });
  }

  getWikiPage(id: number) {
    this.wikiService.getWikiPageFromId(id).subscribe((data: WikiPageResponse) => {

      const pageId = Object.keys(data.query.pages)[0];
      const pageData = data.query.pages[pageId];

      console.log('Page Title:', pageData.title); 
      console.log('Full URL:', pageData.fullurl);
    });
  }
}
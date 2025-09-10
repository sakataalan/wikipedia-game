import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { WikiRandom, WikiPageResponse } from "../models/wiki.model";

@Injectable({
    providedIn: 'root'
})

export class WikiService {
    private http = inject(HttpClient);
    private url = environment.api;
    
    getRandomWikiId() {
        return this.http.get<WikiRandom>(this.url + '&format=json&rnnamespace=0&list=random')
    }

    getWikiPageFromId(id: number) {
        return this.http.get<WikiPageResponse>(this.url + `&prop=info&pageids=${id}&inprop=url`)
    }
}
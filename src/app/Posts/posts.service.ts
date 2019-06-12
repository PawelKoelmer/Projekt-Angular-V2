import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private apiUrl = 'https://jsonplaceholder.typicode.com';


    constructor(private http: HttpClient) { }
    // Pobranie strumienia danych
    public getPosts() {
        return this.http.get<any>(this.apiUrl + '/posts')
            .pipe(
                catchError((err: any) => {
                    console.error(err);
                    return err;
                })
            );
    }
}

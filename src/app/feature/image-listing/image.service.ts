import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IImage } from 'src/app/models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private imageUrl = 'api/data/mock_data.json';

  constructor(private http: HttpClient) { }

  getImages(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.imageUrl)
      .pipe(
        tap((data) => console.log('Initial Mock Data', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // Client-side error or network error occurred
      errorMessage = `An Error occurred: ${err.error.message}`;
    } else {
      errorMessage =`Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage)
    return throwError(() => errorMessage);
  }
}

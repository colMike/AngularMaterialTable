import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

class Lesson {
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  findLessons(
    courseId: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

    return this.http.get('/api/lessons', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map((res: any) => {
        return res['payload'];
      })
    );
  }


}

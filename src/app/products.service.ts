import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private req: HttpClient) { }

  getData(path: string): Observable<any> {
    return this.req.get(path);
  }
}


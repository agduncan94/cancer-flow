import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VariantService {

  constructor(private http: HttpClient) { }

  getVariant(variantId): Observable<Object> {
    let variantUrl = "https://civicdb.org/api/variants/" + variantId;
    return this.http.get<Object>(variantUrl)
  }

}

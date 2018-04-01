import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GeneService {

  constructor(private http: HttpClient) { }

  getGenes(): Observable<Object> {
    let geneUrl = "https://civicdb.org/api/genes";
    return this.http.get<Object>(geneUrl)
  }

  getGene(gene): Observable<Object> {
    let geneUrl = "https://civicdb.org/api/genes/" + gene;
    return this.http.get<Object>(geneUrl)
  }


}

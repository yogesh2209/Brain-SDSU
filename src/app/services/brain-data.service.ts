import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { BrainData } from '../models/brain-data';

import 'rxjs/add/operator/map';

@Injectable()
export class BrainDataService {

  constructor(private http: Http) { }
  private serverApi= 'http://localhost:3000';

  public getTen():Observable<BrainData[]> {

    let URI = `${this.serverApi}/brainSlicer/ten`;
    return this.http.get(URI)
        .map(res => res.json())
        .map(res => <BrainData[]>res.lists);
  }

}

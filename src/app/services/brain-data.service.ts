import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { BrainData } from '../models/brain-data';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrainDataService {

  constructor(private http: Http) { }
  private serverApi= 'http://localhost:3000';
  private BRAINDATA: BrainData[] = [{"catagory":49,"color":108,"vertexNumber":722021,"x":75,"y":33,"z":73},
                                    {"catagory":49,"color":110,"vertexNumber":722022,"x":76,"y":33,"z":73}];

  getBrainDataMock(): BrainData[] {
      return this.BRAINDATA;
  }
  public getTenOld():Observable<BrainData[]> {
    let URI = `${this.serverApi}/brainSlicer/ten`;
    return this.http.get(URI)
        .map(res => res.json())
        .map(res => <BrainData[]>res);
  }

  public getTen(): Observable<BrainData[]> {
    return this.http.get('http://localhost:3000/brainSlicer/ten')
        .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class HttpService {
  private _baseurl = 'https://within2miles.firebaseio.com/';

  constructor(
    private http: Http
  ) { }

  reqOpts() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  get(path: string): Observable<any> {
    return this.http.get(this._baseurl + path)
      .map((res: Response) => res.json());
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(this._baseurl + path, data, this.reqOpts())
      .map((res: Response) => res.json());
  }

  getArray(path: string): Observable<any> {
    return this.http.get(this._baseurl + path)
      .map((res: Response) => res.json())
      //.map(object => object.location);
  }
}


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";


@Injectable()


export class ServeiSocialService {
    constructor(private http: Http) { }
}

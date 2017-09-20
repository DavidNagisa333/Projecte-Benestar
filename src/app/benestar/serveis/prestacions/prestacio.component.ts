import { Component, OnInit } from '@angular/core';

import { PrestacioService } from './prestacio.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';

@Component({
    selector: 'app-prestacio',
    templateUrl: './prestacio.component.html',
    //styleUrls: ['../escola.css'],
    providers: [PrestacioService]
})


export class PrestacioComponent implements OnInit {

  ngOnInit() {
  }
    constructor(private prestacioService: PrestacioService) { }
}

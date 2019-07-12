import { Injectable } from '@angular/core';
import { ServiceBase } from '../abstract/serviceBase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ServiceBase<any> {
  constructor(http: HttpClient) {
    super(http, 'clientes');
  }
}

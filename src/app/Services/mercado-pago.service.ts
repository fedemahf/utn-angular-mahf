import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  constructor(
    private http: HttpClient
  ) { }

  getAll(productName: string) {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/sites/MLA/search?q=${productName}`));
  }

  getById(productId: string): Promise<any> {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/items/${productId}`));
  }
}


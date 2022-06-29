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

  getAll(productName: string, limit?: number) {
    let url = `https://api.mercadolibre.com/sites/MLA/search?q=${productName}`;
    if (limit) {
      url += `&limit=${limit}`;
    }
    return lastValueFrom(this.http.get(url));
  }

  getById(productId: string): Promise<any> {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/items/${productId}`));
  }

  getDescriptionById(productId: string): Promise<any> {
    return lastValueFrom(this.http.get(`https://api.mercadolibre.com/items/${productId}/description`));
  }
}


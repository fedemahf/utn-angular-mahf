import { Component, OnInit } from '@angular/core';
import { MercadoPagoService } from 'src/app/Services/mercado-pago.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  isLoading: boolean = true;

  constructor(
    private mercadoPagoService: MercadoPagoService
  ) {
    this.isLoading = true;

    this.mercadoPagoService.getAll("iPhone", 5)
      .then((data: any) => {
        this.products = data.results;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }

  ngOnInit(): void {
  }

}

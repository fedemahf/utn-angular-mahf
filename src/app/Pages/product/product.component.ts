import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoPagoService } from 'src/app/Services/mercado-pago.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;
  isLoading: boolean;
  hasError?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mercadoPagoService: MercadoPagoService
  ) { 
    this.isLoading = true;
    const productId = this.activatedRoute.snapshot.paramMap.get("id")

    if (productId) {
      this.mercadoPagoService.getById(productId)
        .then(data => {
          this.product = data;
        })
        .catch(error => {
          this.hasError = error.error.error; // yep, this is correct
        })
        .finally(() => {
          this.isLoading = false
        });
    } else {
      this.hasError = "Unknown product ID.";
      this.isLoading = false;
    }
  }

  ngOnInit(): void {
  }

}

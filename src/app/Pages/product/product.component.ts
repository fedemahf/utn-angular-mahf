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
    const productId = this.activatedRoute.snapshot.paramMap.get("id")

    if (productId) {
      this.isLoading = true;
      this.getProductInformation(productId);
    } else {
      this.isLoading = false;
      this.hasError = "Unknown product ID.";
    }
  }

  async getProductInformation(productId: string) {
    try {
      const resultProduct = await this.mercadoPagoService.getById(productId)
      const resultDescription = await this.mercadoPagoService.getDescriptionById(productId);
      this.product = resultProduct;
      this.product.description = resultDescription.plain_text;
    } catch (error: any) {
      this.hasError = error.error.error; // yep, this is correct
    }
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

}

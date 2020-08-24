import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCar } from '../../models/ProductCar';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  productCar: ProductCar[] = [];
  carId: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProductCar();
    this.carId = JSON.parse(localStorage.getItem('carId'));
  }

  // Obtenemos todos los productos del carrito
  getProductCar() {
    this._productService.getProductCar().subscribe((resp: any) => {
      this.productCar = resp.productsCars;
    });
  }
 

  
}

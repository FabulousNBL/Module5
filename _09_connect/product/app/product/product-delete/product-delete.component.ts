import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productFormDelete: FormGroup= new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  })
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      this.productFormDelete.patchValue(value)
    })
  }
  submit() {
    const product = this.productFormDelete.value;
    const id = product.id
    this.productService.deleteProduct(id).subscribe(value => {
      alert('success');
      this.router.navigateByUrl('/')
    })
  }
}

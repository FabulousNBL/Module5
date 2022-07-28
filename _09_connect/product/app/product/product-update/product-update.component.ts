import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  productFormUpdate: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  category: Category[];
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.findById(id).subscribe(value => {
      this.productFormUpdate.patchValue(value);
    })
  }

  submit() {
    const productEdit = this.productFormUpdate.value;
    const id = productEdit.id
    this.productService.updateProduct(id,productEdit).subscribe(value => {
      alert('success');
      this.router.navigateByUrl('/')
    });
  }


  compareByID(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  getCategory(){
    this.productService.getCategoryList().subscribe(value => {
      this.category= value;
    })
  }
}

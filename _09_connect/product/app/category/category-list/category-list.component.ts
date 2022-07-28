import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories : Category[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productService.getCategoryList().subscribe(categories => {
      this.categories = categories;
    });
  }
}

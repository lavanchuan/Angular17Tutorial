import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,
  FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : Product[] = [
    {name: 'Nồi cơm điện', price: 200000},
    {name: 'Bếp từ', price: 1500000},
    {name: 'Ấm siêu tốc', price: 150000},
    {name: 'Quạt điện', price: 100000},
    {name: 'Máy sấy tóc', price: 75000}
  ];
}

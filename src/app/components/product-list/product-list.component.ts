import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'cm-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule, FormsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule, MatIconModule, MatTableModule,MatTooltipModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  displayedColumns = ['productName', 'productCategory', 'productBrand', 'totalQuantity', 'maxRetailPrice', 'purchasePrice', 'action'];
  dataSource = [
    { productName: 'Switch', productCategory: '5A', productBrand: 'Lisha', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Switch', productCategory: '15A', productBrand: 'Lisha', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Switch', productCategory: '5A', productBrand: 'HiFi', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Switch', productCategory: '15A', productBrand: 'HiFi', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Socket', productCategory: '5A', productBrand: 'Lisha', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Socket', productCategory: '15A', productBrand: 'Lisha', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Socket', productCategory: '5A', productBrand: 'HiFi', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    { productName: 'Socket', productCategory: '15A', productBrand: 'HiFi', totalQuantity: 100, maxRetailPrice: 20, purchasePrice: 12 },
    // { name: 'Jane Smith', email: 'jane@example.com' },
    // { name: 'Sam Wilson', email: 'sam@example.com' },
    // { name: 'Alice Cooper', email: 'alice@example.com' },
    // { name: 'John Doe', email: 'john@example.com' },
    // { name: 'Jane Smith', email: 'jane@example.com' },
    // { name: 'Sam Wilson', email: 'sam@example.com' },
    // { name: 'Alice Cooper', email: 'alice@example.com' },
    // { name: 'John Doe', email: 'john@example.com' },
    // { name: 'Jane Smith', email: 'jane@example.com' },
    // { name: 'Sam Wilson', email: 'sam@example.com' },
    // { name: 'Alice Cooper', email: 'alice@example.com' }
  ];

  filterValue = '';
  filteredData = [...this.dataSource];

  ngOnInit() {
    this.applyFilter();
    // Optional: listen to window resize for dynamic mobile detection (advanced)
  }

  applyFilter() {
    // const filter = this.filterValue.trim().toLowerCase();
    // this.filteredData = this.dataSource.filter(item =>
    //   item.name.toLowerCase().includes(filter) ||
    //   item.email.toLowerCase().includes(filter)
    // );
  }
  constructor(private router: Router, private route: ActivatedRoute) { }


  clearFilter() {
    this.filterValue = '';
    this.applyFilter();
  }

  isMobileView(): boolean {
    return window.innerWidth <= 768;
  }

  newproduct() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

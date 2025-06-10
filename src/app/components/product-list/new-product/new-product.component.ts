import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'cm-new-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, FormsModule,
    MatOptionModule, MatCardModule, MatButtonModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  loginForm!: FormGroup;
  @ViewChild('productInput') productInputRef!: ElementRef<HTMLInputElement>;


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productBrand: ['', Validators.required],
      quantity: ['', Validators.required],
      totalQuantity: ['', Validators.required],
      maxRetailPrice: ['', Validators.required],
      purchasePrice: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // Perform login action here
    }
  }
  back() {
    this.router.navigate(['/purchase'], { relativeTo: this.route });
  }

  selectedProduct: string = '';
  showDropdown: boolean = false;
  selectedIndex: number = -1;

  productList = [
    { name: 'Switch', type: 'Electronics' },
    { name: 'Socket', type: 'Accessory' },
    { name: 'Holder', type: 'Accessory' },
    { name: 'Indicator', type: 'Electronics' },
    { name: 'Ceiling Rose', type: 'Electronics' },
    { name: 'Wire', type: 'Electronics' }
  ];

  filteredProducts: { name: string; type: string }[] = [];

  onInputChange(event: Event) {
    const input = (event.target as HTMLInputElement).value;

    if (input.length >= 0) {
      this.filteredProducts = this.productList.filter(p =>
        p.name.toLowerCase().includes(input.toLowerCase()) ||
        p.type.toLowerCase().includes(input.toLowerCase())
      );
      this.showDropdown = this.filteredProducts.length > 0;
    } else {
      this.filteredProducts = [];
      this.showDropdown = false;
    }

    this.selectedIndex = -1;
  }

  autoSelected = false;

  onKeyDown(event: KeyboardEvent) {
    if (this.filteredProducts.length === 0) return;

    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.filteredProducts.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex = (this.selectedIndex - 1 + this.filteredProducts.length) % this.filteredProducts.length;
      event.preventDefault();
    } else if (event.key === 'Enter') {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredProducts.length) {
        this.selectProduct(this.filteredProducts[this.selectedIndex]);
        this.autoSelected = true;
        event.preventDefault(); // prevents form submission / button trigger
      }
    }
  }

  // selectProduct(product: { name: string; type: string }) {
  //   const newValue = product.name;
  //   this.loginForm.get('productName')?.setValue(newValue);
  //   this.filteredProducts = [];
  //   this.showDropdown = false;
  //   this.selectedIndex = -1;
  //   // Caret goes to end, user can type freely
  // }

  // selectProduct(product: { name: string; type: string }) {
  //   this.loginForm.get('productName')?.setValue(product.name);
  //   this.filteredProducts = [];
  //   this.showDropdown = false;
  //   this.selectedIndex = -1;

  //   // ✅ Refocus the input
  //   setTimeout(() => {
  //     this.productInputRef.nativeElement.focus();
  //   }, 0);
  // }

  selectProduct(product: { name: string; type: string }) {
  const selectedName = product.name;

  // Set the value with a trailing space
  this.loginForm.get('productName')?.setValue(selectedName + ' ');

  this.filteredProducts = [];
  this.showDropdown = false;
  this.selectedIndex = -1;

  // Refocus the input after selection
  setTimeout(() => {
    const inputEl = this.productInputRef.nativeElement;
    inputEl.focus();

    // Move cursor to the end
    const val = inputEl.value;
    inputEl.setSelectionRange(val.length, val.length);
  }, 0);
}



  // selectProduct(product: { name: string; type: string }) {
  //   const currentInput = this.loginForm.get('productName')?.value || '';
  //   const selectedName = product.name;

  //   // Keep user's text after selected product
  //   const remaining = currentInput.replace(/.*?( - .*?)?$/, '');
  //   const newValue = `${selectedName}${remaining}`;

  //   this.loginForm.get('productName')?.setValue(newValue);
  //   this.filteredProducts = [];
  //   this.showDropdown = false;
  //   this.selectedIndex = -1;
  // }

  hideDropdown() {
    setTimeout(() => {
      if (!this.autoSelected) {
        this.showDropdown = false;
      }
      this.autoSelected = false; // reset for next time
    }, 150); // wait for click to finish
  }

  scrollToItem() {
    setTimeout(() => {
      const el = document.querySelector('.autocomplete-item.selected');
      el?.scrollIntoView({ block: 'nearest' });
    });
  }
}

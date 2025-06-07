import { Component } from '@angular/core';
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
    MatSelectModule,FormsModule,
    MatOptionModule, MatCardModule, MatButtonModule, MatIconModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  loginForm!: FormGroup;

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
}

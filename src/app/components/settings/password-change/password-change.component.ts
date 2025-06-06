import { Component, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 


@Component({
  selector: 'cm-password-change',
  standalone: true,
 imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,MatCardModule,MatButtonModule,MatIconModule,MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class PasswordChangeComponent {
   back() {
    this.router.navigate(['/products']);
  }
  form = this.fb.group({
    productName: [''],
    productCompany: [''],
    maximumRetailPrice: [''],
    purchasePrice: [''],
    quantity: [''],
    availQuantity:[]
  });

  constructor(private router: Router, private fb: FormBuilder) { }
  onSubmit(){}
  onCancel(){}
}

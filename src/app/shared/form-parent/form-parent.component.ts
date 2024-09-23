import { Component } from '@angular/core';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent {
  // يمكنك إضافة أي منطق إضافي هنا إذا لزم الأمر

  // مثال على معطيات يمكن تمريرها لـ FormInputComponent
  inputLabel: string = 'Enter your value';
  inputValue: string = '';

  // التعامل مع قيمة المدخلات
  handleInputChange(value: string) {
    this.inputValue = value;
    console.log('Input value:', this.inputValue);
  }
}

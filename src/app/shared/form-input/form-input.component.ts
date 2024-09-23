import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input() label!: string; // التسمية الخاصة بحقل الإدخال
  @Input() type: string = 'text'; // نوع الحقل، النص هو النوع الافتراضي
  @Input() controlName!: string; // اسم الحقل المتحكم للربط مع النموذج
  @Input() formGroup!: FormGroup; // مجموعة النموذج التي ينتمي إليها الحقل
  @Input() placeholder: string = ''; // النص الذي يظهر عند ترك الحقل فارغًا

  // دالة لاسترجاع رسالة الخطأ المناسبة لحقل الإدخال
  get errorMessage(): string | null {
    const control = this.formGroup.get(this.controlName); // الحصول على الحقل باستخدام `get` بدلاً من `controls`
    if (control && control.touched && control.invalid) {
      if (control.errors?.['required']) {
        return `${this.label} is required.`; // خطأ مطلوب
      }
      if (control.errors?.['minlength']) {
        return `${this.label} must be at least ${control.errors['minlength'].requiredLength} characters.`; // خطأ الحد الأدنى
      }
      if (control.errors?.['maxlength']) {
        return `${this.label} cannot exceed ${control.errors['maxlength'].requiredLength} characters.`; // خطأ الحد الأقصى
      }
      if (control.errors?.['email']) {
        return `Please enter a valid email address.`; // خطأ البريد الإلكتروني
      }
    }
    return null; // في حال عدم وجود أخطاء
  }
}


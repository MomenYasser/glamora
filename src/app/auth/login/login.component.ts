import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // هنا يمكنك إضافة منطق المصادقة
    localStorage.setItem('user', this.username); // تخزين اسم المستخدم في localStorage
    this.router.navigate(['/home']); // إعادة التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
  }
}


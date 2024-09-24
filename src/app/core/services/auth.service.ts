import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', email: 'user1@example.com', password: 'password123', role: 'user' },
    { username: 'user2', email: 'user2@example.com', password: 'password456', role: 'admin' }
  ];

  constructor() { }

  // دالة للحصول على المستخدم بناءً على اسم المستخدم
  getUserByUsername(username: string, email: string) {
    return this.users.find(u => u.username === username && u.email === email);
  }

  // دالة لتسجيل الدخول
  login(username: string, email: string, password: string): boolean {
    const user = this.users.find(u =>
      u.username === username &&    // تحقق من اسم المستخدم
      u.email === email &&          // تحقق من البريد الإلكتروني
      u.password === password        // تحقق من كلمة المرور
    );

    if (user) {
      localStorage.setItem('user', user.username);
      localStorage.setItem('role', user.role);
      return true;
    }
    return false;
  }

  // دالة للتحقق مما إذا كان المستخدم مسجلاً الدخول
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  // دالة للتحقق مما إذا كان المستخدم إداريًا
  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }

  // دالة لتسجيل الخروج
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }
}












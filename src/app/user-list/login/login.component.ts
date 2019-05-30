import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: UserAuthService,
    private _route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
  onLogin() {
    let item = this.loginForm.value;
    this.authService.login(item).subscribe(
      (data: any[]) => {
        if (data.length == 1) {
          console.log(data);
          this.authService.currentUser = {
            username: data[0].username,
            password: data[0].password
          }
          if (this.authService.redirectURL) {
            this._route.navigateByUrl(this.authService.redirectURL);
          }
          else {
            this._route.navigate(['']);
          }
        }
        else {
          alert('username or password invalid');
        }

      });
  }
}

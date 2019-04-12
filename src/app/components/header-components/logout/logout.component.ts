import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  username: string;

  constructor(private user: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.getName().subscribe(response => {
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      console.log("1", currentUser);
      let user = '';
      if (currentUser) {
        user = currentUser.username;
        console.log("user->",user);
        console.log("CurrentUser->",currentUser);
      }
      if (response == "Guest") {
        this.username = "Guest";
        console.log("if", this.username);
      } else {
        this.username = response;
        console.log("else",this.username);
      }
    });
  }



  logout() {
    let answer ;
    if (answer || !answer) {
      localStorage.removeItem('currentUser');
      this.user.setName('Guest');
      this.router.navigate(['/home']);
  }
}

}

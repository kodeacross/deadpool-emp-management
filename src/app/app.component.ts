import { Component, effect, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'deadpool-employee-management';
  auth = inject(AuthService);

  
  public ngOnInit() {
    this.auth.isAuthenticated$.subscribe((authenticated) => {
      if(!authenticated) {
        this.auth.loginWithRedirect();
      }
    })
  }
 
}

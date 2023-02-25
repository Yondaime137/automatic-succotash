import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  users: any  = [];

  karabas = (input: string) => {
    this.users.push(input);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  text = '';

  public onType(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.text = inputElement.value;
  }

  public onSubmit() {
    alert(`You typed: ${this.text}`);
  }
}

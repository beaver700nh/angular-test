import { Component } from '@angular/core';

@Component({
  selector: 'app-alerter',
  templateUrl: './alerter.component.html',
  styleUrls: ['./alerter.component.css']
})
export class AlerterComponent {
  text = '';

  public onType(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.text = inputElement.value;
  }

  public onSubmit() {
    alert(`You typed: ${this.text}`);
  }
}

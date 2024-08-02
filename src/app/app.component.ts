import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Bash Application';
  btn: string = 'Submit Name';
  angularImage: string = '../assets/angular.png';

  // attribute binding
  isDisable: boolean = true;

  // event binding
  toggleButtonDisabled = () => {
    this.isDisable = !this.isDisable;
  };

  // two way data binding
  name: string = '';
}

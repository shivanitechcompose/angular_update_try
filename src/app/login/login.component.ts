import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
        const firstName = signal('John');
        const lastName = signal('Doe');
        const age = signal(30);
    
        const fullName = computed(() => `${firstName()} ${lastName()}`);
        const isAdult = computed(() => age() >= 18);

        effect(() => {
          console.log(`Full Name: ${fullName()}`);
          console.log(`Is Adult: ${isAdult()}`);
        });
    
        firstName.set('Jane');
        lastName.set('Smith');
        age.set(25);
  }

  ngOnInit(): void {
  }

}

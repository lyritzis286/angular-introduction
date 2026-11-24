import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Person } from './shared/interfaces/person';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
@Component({
  imports: [Step2PersonTable, RouterOutlet, Step3PersonTableInput, Step4ForDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-introduction');
  // Step 1 One way Binding
  name = 'Markos';

  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr',
  };

  person1: Person = {
    firstname: 'Goorge',
    lastname: 'Harrison',
    email: 'george.harisson@aueb.gr',
  };

  person2: Person = {
    firstname: 'lakis',
    lastname: 'lalakis',
    email: 'lalakis@aueb.gr',
  };
}

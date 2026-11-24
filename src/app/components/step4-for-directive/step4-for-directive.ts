import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
@Component({
  imports: [Step3PersonTableInput],
  selector: 'app-step4-for-directive',
  styleUrl: './step4-for-directive.css',
  templateUrl: './step4-for-directive.html',
})
export class Step4ForDirective {
  persons: Person[] = [
    { firstname: 'Peri', lastname: 'MacElholm', email: 'pmacelholm0@forbes.com' },
    { firstname: 'Yank', lastname: 'Kearey', email: 'ykearey1@unblog.fr' },
    { firstname: 'Louise', lastname: 'Sturdgess', email: 'lsturdgess2@bing.com' },
    { firstname: 'Clarissa', lastname: 'Bolderson', email: 'cbolderson3@jimdo.com' },
    { firstname: 'Rutter', lastname: 'Kunzel', email: 'rkunzel4@mozilla.com' },
    { firstname: 'Karlie', lastname: 'Sirrell', email: 'ksirrell5@symantec.com' },
    { firstname: 'Keri', lastname: 'Trematick', email: 'ktrematick6@abc.net.au' },
    { firstname: 'Barbie', lastname: 'Cicutto', email: 'bcicutto7@rediff.com' },
    { firstname: 'Petronella', lastname: 'Brailey', email: 'pbrailey8@mit.edu' },
    { firstname: 'Nichole', lastname: 'Guys', email: 'nguys9@odnoklassniki.ru' },
    { firstname: 'Darb', lastname: 'Fildes', email: 'dfildesa@wikia.com' },
    { firstname: 'Gonzalo', lastname: 'Hatz', email: 'ghatzb@edublogs.org' },
    { firstname: 'Dre', lastname: 'Kwietak', email: 'dkwietakc@bbb.org' },
    { firstname: 'Munroe', lastname: 'Leupoldt', email: 'mleupoldtd@squidoo.com' },
    { firstname: 'Duane', lastname: 'Roper', email: 'dropere@twitpic.com' },
    { firstname: 'Kiley', lastname: 'Savil', email: 'ksavilf@ifeng.com' },
    { firstname: 'Tania', lastname: 'Vella', email: 'tvellag@mozilla.org' },
    { firstname: 'Lucita', lastname: 'Pickworth', email: 'lpickworthh@washingtonpost.com' },
    { firstname: 'Kristos', lastname: 'Golling', email: 'kgollingi@hexun.com' },
    { firstname: 'Ignatius', lastname: 'Van Hesteren', email: 'ivanhesterenj@hugedomains.com' },
  ];
}

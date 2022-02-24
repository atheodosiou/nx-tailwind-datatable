import { Component } from '@angular/core';
import { NgTailwindDatatableCol } from 'ng-tailwind-datatable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-tailwind-datatable';

  cols: NgTailwindDatatableCol[] = [
    { header: 'First Name', field: 'firstName', colWidth: '200px' },
    { header: 'Last Name', field: 'lastName', colWidth: '200px' },
    { header: 'Age', field: 'age', colWidth: '200px' },
    { header: 'Profession', field: 'profession', colWidth: '200px' }
  ];

  data: any[] = [
    { firstName: 'Dimitrios', lastName: 'Theodosiou', age: '60', profession: 'Private Employee' },
    { firstName: 'Pelagia', lastName: 'Polyzoidou', age: '58', profession: 'Private Employee' },
    { firstName: 'Anastasios', lastName: 'Theodosiou', age: '30', profession: 'Frontend Developer' },
    { firstName: 'Athanasia', lastName: 'Theodosiou', age: '28', profession: 'Pharmaceutical Assistant' },
    { firstName: 'Padelis', lastName: 'Theodosiou', age: '26', profession: 'Frontend Developer' },
  ];
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTailwindTemplate } from './utils/ngTailwindTemplate.directive'
import { NgTailwindDatatableComponent } from './ng-tailwind-datatable.component';



@NgModule({
  declarations: [
    NgTailwindDatatableComponent,
    NgTailwindTemplate
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgTailwindDatatableComponent,
    NgTailwindTemplate
  ]
})
export class NgTailwindDatatableModule { }

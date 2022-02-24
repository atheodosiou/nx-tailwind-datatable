import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngTailwindTemplate]'
})
export class NgTailwindTemplate {

  @Input() type!: string;

  @Input('ngTailwindTemplate') name!: string;

  constructor(public template: TemplateRef<any>) { }

  getType(): string {
    return this.name;
  }

}

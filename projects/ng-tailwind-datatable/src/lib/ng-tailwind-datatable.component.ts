import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef, ContentChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';
import { NgTailwindTemplate } from './utils/ngTailwindTemplate.directive';
import { NgTailwindDatatableCol } from './utils/table-col';

@Component({
  selector: 'ng-tailwind-table',
  templateUrl: './ng-tailwind-datatable.component.html',
  styleUrls: ['./ng-tailwind-datatable.component.css']
})
export class NgTailwindDatatableComponent implements OnInit, AfterContentInit {

  constructor() { }

  @Input() id!: string;
  @Input() columns: NgTailwindDatatableCol[] = [];
  @Input() data: any[] = [];
  @Input() scrollHeight: string | undefined;
  @Input() style: any;
  @Input() styleClass: string | undefined;
  @Input() virtualScroll: boolean = false;
  @Input() tableStyleClass!: string
  @Input() tableStyle: any;

  @ViewChild('container') containerViewChild!: ElementRef;
  @ViewChild('wrapper') wrapperViewChild!: ElementRef;
  @ViewChild('table') tableViewChild!: ElementRef;

  @ContentChildren(NgTailwindTemplate) templates!: QueryList<NgTailwindTemplate>;

  captionTemplate!: TemplateRef<any>;
  headerTemplate!: TemplateRef<any>;
  bodyTemplate!: TemplateRef<any>;
  footerTemplate!: TemplateRef<any>;
  summaryTemplate!: TemplateRef<any>;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'summary':
          this.summaryTemplate = item.template;
          break;
      }
    })
  }
}

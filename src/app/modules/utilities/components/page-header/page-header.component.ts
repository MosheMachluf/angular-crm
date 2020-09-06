import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="row mt-4">
      <div class="col-12">
        <div class="jumbotron bg-light py-3">
          <h3 class="lead m-0">
            <i [ngClass]="icon"></i>{{ title | titlecase }}
          </h3>
          <div class="lead my-1 text-muted" *ngIf="description">
            {{ description | paragraphCapital }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PageHeaderComponent {
  @Input() icon: string = '';
  @Input() title: string = 'page name';
  @Input() description: string = null;
}

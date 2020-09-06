import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styles: [
    `
      .border-card {
        border-left: 4px solid;
      }
    `,
  ],
})
export class MiniCardComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() classCard: string;
  @Input() linkText: string;
  @Input() link: string;
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}

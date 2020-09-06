import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      <i [ngClass]="icon"></i>
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      button {
        font-size: 12px;
        /* height: 38px;
        width: 200px; */
        transition: filter 0.2s ease, background-color 0.2s ease,
          border-color 0.2s ease;
        font-weight: 600;
        white-space: nowrap;
        padding: 0.5rem 1.5rem;
        height: 38px;
      }

      button {
        border-radius: 4px;
        border: 1px solid transparent;
        background: linear-gradient(135deg, #416aa7, #2d5083);
        color: #fff;
      }

      button:hover {
        filter: brightness(110%);
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}

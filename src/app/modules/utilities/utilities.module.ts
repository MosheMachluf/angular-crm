import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ChartComponent } from './components/chart/chart.component';

const exportations = [
  CardComponent,
  MiniCardComponent,
  ButtonComponent,
  PageHeaderComponent,
  ParagraphCapitalPipe,
  FilterArrayPipe,
  ChartComponent,
];
@NgModule({
  declarations: [
    CardComponent,
    MiniCardComponent,
    ButtonComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    FilterArrayPipe,
    ChartComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [...exportations],
})
export class UtilitiesModule {}

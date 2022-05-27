import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoutingListModule } from './routing-list.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingListModule,
    FormsModule
  ],
  exports: [ListContainerComponent]
})
export class ListModule { }

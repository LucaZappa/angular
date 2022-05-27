import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoutingListModule } from './routing-list.module';
import { FormsModule } from '@angular/forms';
import { ListPostComponent } from './components/list-post/list-post.component';
import { ListPutComponent } from './components/list-put/list-put.component';

//modulo delle componenti list

@NgModule({
  declarations: [
    ListContainerComponent,
    ListPostComponent,
    ListPutComponent
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

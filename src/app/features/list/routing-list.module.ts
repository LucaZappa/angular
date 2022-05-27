import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';



const routes: Routes = [{
  path: '', component: ListContainerComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class RoutingListModule { }

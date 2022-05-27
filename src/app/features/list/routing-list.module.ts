import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { ListPutComponent } from './components/list-put/list-put.component';


//modulo di routing di list, pemetee di navigarte nelle altre due componenti ListPostComponent e ListPutComponent
const routes: Routes = [{
  path: '', component: ListContainerComponent
},
{  path: 'insert/', component: ListPostComponent
},
{  path: 'modify/:id', component: ListPutComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class RoutingListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServiceService } from './services/list-service.service';

//modulo riguardante i core

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ListServiceService
  ]
})
export class CoreModuleModule { }

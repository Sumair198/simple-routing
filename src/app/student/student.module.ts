import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.log('Student module')
@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports : [
    LoginComponent, ListComponent
  ]
})
export class StudentModule { }

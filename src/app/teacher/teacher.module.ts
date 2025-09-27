import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

console.log('Teacher module')
@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports : [
    LoginComponent, ListComponent
  ]
})
export class TeacherModule { }

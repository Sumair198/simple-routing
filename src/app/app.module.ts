import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import {UserModule} from './user/user.module'
import {AdminModule} from './admin/admin.module'
import {EmployeeModule} from './employee/employee.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component'
import {FormsModule , ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ArticleComponent,
    UserlistComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

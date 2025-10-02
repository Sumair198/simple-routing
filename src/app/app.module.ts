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
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

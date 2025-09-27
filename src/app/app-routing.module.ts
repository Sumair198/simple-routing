import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './user/login/login.component'
import { SignupComponent } from './user/signup/signup.component'

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student', loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule) },
  {path : 'teacher' , loadChildren : ()=>import('./teacher/teacher.module').then(mod=>mod.TeacherModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

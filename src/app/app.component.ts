import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-routing';
  constructor(private viewconatiner: ViewContainerRef, private cfr: ComponentFactoryResolver) { }

  async adminList() {
    this.viewconatiner.clear()
    const { AdminlistComponent } = await import('./adminlist/adminlist.component')
    this.viewconatiner.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }
  async userList() {
    this.viewconatiner.clear()
    const { UserlistComponent } = await import('./userlist/userlist.component')
    this.viewconatiner.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
  formValues(evt: any) {
    console.log(evt)
  }
  username: any = 'sumair'
  password: any = 9910

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  login() {
    console.log(this.loginForm.value)
  }

  get name() {
    return this.loginForm.get('username')
  }
  get userpassword() {
    return this.loginForm.get('password')
  }

  oneWayName = 'marc'
  isError: boolean = true

  divColorChange : string = ''
  addBlue()
  {
    this.divColorChange = 'blueClass'
  }
  addRed()
  {
    this.divColorChange = 'redClass'
  }
  bigFont : boolean = true
}

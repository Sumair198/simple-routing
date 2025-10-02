import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-routing';
  constructor(private viewconatiner: ViewContainerRef, private cfr: ComponentFactoryResolver , private toastr: ToastrService , private users : UserService) { }

  ngOnInit()
  {
    this.users.getUsers().subscribe((res : any)=>
    {
      console.log(res)
    })
  }

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
  showSuccess() {
    this.toastr.success('User Login Successfully!', 'Success' , {closeButton : true} );
  }
  formValues(evt: any) {
    console.log(evt)
    if(evt)
    {
      this.showSuccess()
    }
    
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

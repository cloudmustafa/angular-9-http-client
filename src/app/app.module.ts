import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
//import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    //EmployeeDetailsComponent,
    UserListComponent
    //UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

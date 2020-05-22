import { UserService } from '../user.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  feedback: any = {};
  name: string;
  age: number;
  json;
  constructor(private userService: UserService, private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  // save(){
  //   this.json = {
  //     "name": "michael roberts"
  //   }
  //   let url = "/api/users/"
  //   const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //   console.log(JSON.stringify(this.user.name))
  //   //this.userService.createUser(this.user.name,config).toPromise().then((data:any) => {
  //   this.http.post(url,JSON.stringify(this.json), config).toPromise().then((data:any) => {
  //     //this.json = data.json;

  //   });

    // console.log(JSON.stringify(this.user));
    // this.userService.createUser(JSON.stringify(this.user)).subscribe(res => {
    //      console.log('Post created successfully!');
    //      this.router.navigateByUrl('/users');
    // })
  //}

  // save()
  // {
  //   let url = "/api/users/"
  //   const data = {"name": this.user.name, "age": this.user.age};
  //   console.log(JSON.stringify(data))
  //   const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //   return this.http.post<any>(url, data, config).toPromise().then((data:any) => {
  //       console.log(JSON.stringify(data))
  //     });
  // }


  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    console.log('User created!')
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}

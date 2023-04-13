import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = 'bob'
  isEmpty(): boolean{
    return this.username == '';
  }
  updateUserName(){
    this.username = 'hello World';
  }
  setUserName(s:string){
    this.username = s;
  }
}

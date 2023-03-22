import { Component, OnInit } from '@angular/core';
import { UserListUsecase } from './service/user-list.usecase';
import { UserListFilter } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users$ = this.userList.users$;
  userListFilter$ = this.userList.filter$;

  constructor(private userList: UserListUsecase) {}

  ngOnInit() {
    this.userList.fetchUsers();
  }

  setUserListFilter(value: UserListFilter){
    this.userList.setNameFilter(value.nameFilter)
  }
}

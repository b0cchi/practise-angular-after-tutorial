import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() users!: User[];
}

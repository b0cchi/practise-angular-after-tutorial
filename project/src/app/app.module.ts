import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserListItemComponent } from './view/user-list-item/user-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListFilterComponent } from './view/user-list-filter/user-list-filter.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserListItemComponent, UserListFilterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

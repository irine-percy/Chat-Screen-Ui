import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    MessagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    UsersComponent,
    ProfileComponent,
    MessagesComponent,
    HomeComponent
  ],
})
export class ChatModule { }

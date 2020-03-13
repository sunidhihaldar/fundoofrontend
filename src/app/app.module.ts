import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserActivateComponent } from './components/authentication/user-activate/user-activate.component';
import { PasswordUpdateComponent } from './components/authentication/password-update/password-update.component';
import { NoteComponent } from './components/note/note.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { NoteIconlistComponent } from './components/note-iconlist/note-iconlist.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { PinNoteComponent } from './components/pin-note/pin-note.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    UserActivateComponent,
    PasswordUpdateComponent,
    NoteComponent,
    DisplayNoteComponent,
    NoteIconlistComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
    PinNoteComponent,
    ReminderComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

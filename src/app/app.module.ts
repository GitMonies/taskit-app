import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { TaskCreationModalComponent } from './task-creation-modal/task-creation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TasklistComponent,
    TaskCreationModalComponent,
   ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

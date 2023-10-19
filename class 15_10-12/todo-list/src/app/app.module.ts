import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarListComponent } from './sidebar/sidebar-list/sidebar-list.component';
import { SidebarFormComponent } from './sidebar/sidebar-form/sidebar-form.component';
import { MainFormComponent } from './main-content/main-form/main-form.component';
import { MainListComponent } from './main-content/main-list/main-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    SidebarListComponent,
    SidebarFormComponent,
    MainFormComponent,
    MainListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

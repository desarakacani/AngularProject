import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FiltersComponent } from './shared/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginationComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

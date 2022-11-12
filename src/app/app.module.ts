import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HomePage } from './pages/home/home.page';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [AppComponent, HomePage, NavbarComponent, StartComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

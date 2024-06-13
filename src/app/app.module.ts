import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookComponent } from './components/book/book.component';
import { AboutComponent } from './components/about/about.component';
import { ExplooreComponent } from './components/exploore/exploore.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    BookComponent,
    AboutComponent,
    ExplooreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

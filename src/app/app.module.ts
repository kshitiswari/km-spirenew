import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsModule } from './projects/projects.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { DateDisplayComponent } from './date-display/date-display.component';
import { SummaryPipe } from './summary.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
    CareerComponent,
    ContactComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SocialComponent,
    DateDisplayComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
  //  BrowserAnimationModule,
    ProjectsModule,
    AppRoutingModule,
    HttpClientModule,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

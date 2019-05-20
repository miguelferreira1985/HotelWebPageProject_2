import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { RoomsService } from './services/rooms.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomComponent } from './components/room/room.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    GalleryComponent,
    RoomsComponent,
    RoomComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule
  ],
  providers: [
    RoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

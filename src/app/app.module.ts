import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Maps
import { AgmCoreModule } from '@agm/core';
// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { RoomTypeService } from './services/roomType.service';
import { FacilitiesService } from './services/facilities.service';
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
import { ContactComponent } from './components/contact/contact.component';
import { FacilitiesGalleryComponent } from './components/facilities-gallery/facilities-gallery.component';
import { RoomsGalleryComponent } from './components/rooms-gallery/rooms-gallery.component';


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
    ContactComponent,
    FacilitiesGalleryComponent,
    RoomsGalleryComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJjfiuXPIPRMveYkgc17QOrz8dlR6zLWU'
    })
  ],
  providers: [
    RoomTypeService,
    FacilitiesService,
    RoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

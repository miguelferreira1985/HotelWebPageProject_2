import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ContactComponent } from './components/contact/contact.component';
import { FacilitiesGalleryComponent } from './components/facilities-gallery/facilities-gallery.component';
import { RoomsGalleryComponent } from './components/rooms-gallery/rooms-gallery.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'facilitiesGallery', component: FacilitiesGalleryComponent },
    { path: 'roomsGallery', component: RoomsGalleryComponent },
    { path: 'rooms', component: RoomsComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

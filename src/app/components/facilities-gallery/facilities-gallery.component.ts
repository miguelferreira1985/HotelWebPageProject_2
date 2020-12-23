import { Component, OnInit } from '@angular/core';
import { FacilitiesService, Facility } from '../../services/facilities.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-facilities-gallery',
  templateUrl: './facilities-gallery.component.html',
  providers: [NgbCarouselConfig]
})
export class FacilitiesGalleryComponent implements OnInit {

  facilities: Facility[] = [];

  constructor(private facilitiesService: FacilitiesService, config: NgbCarouselConfig) {
        // customiza default values of carousels used by this component tree
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
   }

  ngOnInit() {
    this.facilities = this.facilitiesService.getFacilities();
  }

}

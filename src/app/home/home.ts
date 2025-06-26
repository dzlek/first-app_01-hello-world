import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';
import {HousingLocationInfo} from '../housinglocation.innterface';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
<section class="results">
  <app-housing-location *ngFor = "let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
</section>
`,
  styles: ``
})


export class Home {
  housingLocationList: HousingLocationInfo[] = [];

  housingService: HousingService = inject(HousingService);
  
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    
 this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }


}

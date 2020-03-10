import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

// Routing
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GenesComponent } from './genes/genes.component';
import { GeneService } from './gene.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneComponent } from './gene/gene.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    GenesComponent,
    GeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GeneService],
  bootstrap: [AppComponent]
})
export class AppModule { }

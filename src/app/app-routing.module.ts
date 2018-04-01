import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { GenesComponent } from './genes/genes.component'

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'genes', component: GenesComponent },
  { path: 'genes/:id', component: GenesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

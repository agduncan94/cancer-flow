import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { GenesComponent } from './genes/genes.component'
import { GeneComponent } from './gene/gene.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { VariantComponent } from './variant/variant.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: DashboardComponent },
  { path: 'genes', component: GenesComponent },
  { path: 'genes/:id', component: GeneComponent },
  { path: 'genes/:id/:variant', component: VariantComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

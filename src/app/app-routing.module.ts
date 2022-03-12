import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuddysComponent } from './buddys/buddys.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', component: BuddysComponent
  },
  {
    path: 'buddys', component: BuddysComponent
  },
  {
    path: 'new-hardware', component: HardwareComponent
  },
  {
    path: 'buddys/hardware/:id', component: HardwareComponent
  },
  {
    path: 'settings', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

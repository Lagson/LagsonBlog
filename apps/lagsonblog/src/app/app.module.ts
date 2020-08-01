import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'home-feature',
        loadChildren: () =>
        import('@lagson-inc/home/feature').then(
          module => module.HomeFeatureModule
        )
      }
    ],
    {initialNavigation: 'enabled'}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

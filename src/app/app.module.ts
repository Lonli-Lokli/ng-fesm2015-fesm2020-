import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ComponentStore } from '@ngrx/component-store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ComponentStore],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(store: ComponentStore<any>) {
    console.log('Now it is ' + (store as any)['type']);
  }
}

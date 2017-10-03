import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { AppModule } from './imports/app/app.module';

Meteor.startup(() => {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(AppModule);
});

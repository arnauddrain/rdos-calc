import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;


import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    SplashScreen.hide();
    await this.languageService.initialize();
  }
}

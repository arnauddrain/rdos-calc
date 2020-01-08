import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) { }

  public async initialize() {
    this.translate.setDefaultLang('fr');
    const language = await this.getLanguage();
    this.translate.use(language);
  }

  public async setLanguage(language: string) {
    await Storage.set({
      key: 'language',
      value: language
    });
    this.translate.use(language);
  }

  public async getLanguage() {
    const language = await Storage.get({ key: 'language' });
    if (language.value) {
      return language.value;
    }
    return navigator.language.substring(0, 2);
  }
}

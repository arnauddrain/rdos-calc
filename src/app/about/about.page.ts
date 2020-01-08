import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.css'],
})
export class AboutPage implements OnInit {

  public languages = [
    {
      label: 'Français',
      code: 'fr'
    },
    {
      label: 'English',
      code: 'en'
    }
  ];

  public selectedLanguage: string;

  constructor(private languageService: LanguageService) { }

  async ngOnInit() {
    this.selectedLanguage = await this.languageService.getLanguage();
  }

  async updateLanguage() {
    await this.languageService.setLanguage(this.selectedLanguage);
  }

}

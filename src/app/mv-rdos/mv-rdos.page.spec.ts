import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MvRdosPage } from './mv-rdos.page';

describe('MvRdosPage', () => {
  let component: MvRdosPage;
  let fixture: ComponentFixture<MvRdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvRdosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MvRdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

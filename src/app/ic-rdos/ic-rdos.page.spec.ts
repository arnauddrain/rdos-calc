import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IcRdosPage } from './ic-rdos.page';

describe('IcRdosPage', () => {
  let component: IcRdosPage;
  let fixture: ComponentFixture<IcRdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcRdosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcRdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

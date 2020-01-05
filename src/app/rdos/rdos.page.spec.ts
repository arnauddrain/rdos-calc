import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormTestModule } from '../form/form.test.module';
import { RdosPage } from './rdos.page';

describe('RdosPage', () => {
  let component: RdosPage;
  let fixture: ComponentFixture<RdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RdosPage],
      imports: [
        IonicModule.forRoot(),
        FormTestModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

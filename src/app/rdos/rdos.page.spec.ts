import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormStubComponent } from '../form/form.stub.component';
import { FormHeaderStubComponent } from '../form-header/form-header.stub.component';
import { RdosPage } from './rdos.page';

describe('RdosPage', () => {
  let component: RdosPage;
  let fixture: ComponentFixture<RdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RdosPage,
        FormStubComponent,
        FormHeaderStubComponent
      ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

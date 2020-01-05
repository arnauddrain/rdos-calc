import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormStubComponent } from '../form/form.stub.component';
import { FormHeaderStubComponent } from '../form-header/form-header.stub.component';
import { IcRdosPage } from './ic-rdos.page';

describe('IcRdosPage', () => {
  let component: IcRdosPage;
  let fixture: ComponentFixture<IcRdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IcRdosPage,
        FormStubComponent,
        FormHeaderStubComponent
      ], imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IcRdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

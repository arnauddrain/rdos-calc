import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormStubComponent } from '../form/form.stub.component';
import { FormHeaderStubComponent } from '../form-header/form-header.stub.component';
import { MvRdosPage } from './mv-rdos.page';

describe('MvRdosPage', () => {
  let component: MvRdosPage;
  let fixture: ComponentFixture<MvRdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MvRdosPage,
        FormStubComponent,
        FormHeaderStubComponent
      ], imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MvRdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

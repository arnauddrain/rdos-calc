import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { ScoreComponent } from './score.component';
import { Form } from '../../entities/form';
import { RdosForm } from '../../rdos/rdos.form';
import { IcRdosForm } from '../../ic-rdos/ic-rdos.form';
import { MvRdosForm } from '../../mv-rdos/mv-rdos.form';

@Component({
  template: `
    <app-score
      [form]="form">
    </app-score>`
})
class TestHostComponent {
  form: Form;
}

describe('ScoreComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreComponent, TestHostComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;

    const form = new Form();
    form.questions = [];
    testHost.form = form;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should have right score for rdos', () => {
    const form = RdosForm;
    form.questions[0].selectedAnswer = { text: '', value: 1 };
    form.questions[1].selectedAnswer = { text: '', value: 2 };
    form.questions[2].selectedAnswer = { text: '', value: 1 };
    form.questions[3].selectedAnswer = { text: '', value: 0 };
    form.questions[4].selectedAnswer = { text: '', value: 1 };
    form.questions[5].selectedAnswer = { text: '', value: 0 };
    form.questions[6].selectedAnswer = { text: '', value: 2 };
    form.questions[7].selectedAnswer = { text: '', value: 1 };

    testHost.form = form;

    fixture.detectChanges();

    const scoreEl = fixture.nativeElement.querySelector('.value');
    expect(scoreEl.textContent).toBe('8');
  });

  it('should have right score for ic-rdos', () => {
    const form = IcRdosForm;
    form.questions[0].numericAnswer = 86;
    form.questions[1].selectedAnswer = { text: '', value: -1 };
    form.questions[2].selectedAnswer = { text: '', value: 1 };
    form.questions[3].selectedAnswer = { text: '', value: 1 };
    form.questions[4].selectedAnswer = { text: '', value: 0.7 };

    testHost.form = form;

    fixture.detectChanges();

    const scoreEl = fixture.nativeElement.querySelector('.value');
    expect(scoreEl.textContent).toBe('6.3');
  });

  it('should have right score for mv-rdos', () => {
    const form = MvRdosForm;
    form.questions[0].numericAnswer = 86;
    form.questions[1].numericAnswer = 34;
    form.questions[2].selectedAnswer = { text: '', value: -1 };
    form.questions[3].selectedAnswer = { text: '', value: 1 };
    form.questions[4].selectedAnswer = { text: '', value: 1 };

    testHost.form = form;

    fixture.detectChanges();

    const scoreEl = fixture.nativeElement.querySelector('.value');
    expect(scoreEl.textContent).toBe('6.3');
  });
});

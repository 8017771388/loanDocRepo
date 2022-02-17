import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentTemplateComponent } from './commitment-template.component';

describe('CommitmentTemplateComponent', () => {
  let component: CommitmentTemplateComponent;
  let fixture: ComponentFixture<CommitmentTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitmentTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

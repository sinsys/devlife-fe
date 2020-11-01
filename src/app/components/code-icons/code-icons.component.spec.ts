import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeIconsComponent } from './code-icons.component';

describe('CodeIconsComponent', () => {
  let component: CodeIconsComponent;
  let fixture: ComponentFixture<CodeIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

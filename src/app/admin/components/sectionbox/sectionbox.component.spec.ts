import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionboxComponent } from './sectionbox.component';

describe('SectionboxComponent', () => {
  let component: SectionboxComponent;
  let fixture: ComponentFixture<SectionboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

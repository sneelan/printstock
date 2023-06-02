import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncolorboxComponent } from './sectioncolorbox.component';

describe('SectioncolorboxComponent', () => {
  let component: SectioncolorboxComponent;
  let fixture: ComponentFixture<SectioncolorboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncolorboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectioncolorboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjsChaptersComponent } from './vjs-chapters.component';

describe('VjsChaptersComponent', () => {
  let component: VjsChaptersComponent;
  let fixture: ComponentFixture<VjsChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjsChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjsChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

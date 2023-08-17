import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredMainComponent } from './bored-main.component';

describe('BoredMainComponent', () => {
  let component: BoredMainComponent;
  let fixture: ComponentFixture<BoredMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpComponent } from './yelp.component';

describe('YelpComponent', () => {
  let component: YelpComponent;
  let fixture: ComponentFixture<YelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

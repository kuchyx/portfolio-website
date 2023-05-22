import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimpsComponent } from './chimps.component';

describe('ChimpsComponent', () => {
  let component: ChimpsComponent;
  let fixture: ComponentFixture<ChimpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChimpsComponent]
    });
    fixture = TestBed.createComponent(ChimpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

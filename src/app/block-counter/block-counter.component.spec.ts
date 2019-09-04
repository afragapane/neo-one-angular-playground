import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCounterComponent } from './block-counter.component';

describe('BlockCounterComponent', () => {
  let component: BlockCounterComponent;
  let fixture: ComponentFixture<BlockCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

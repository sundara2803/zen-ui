import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenUiComponent } from './zen-ui.component';

describe('ZenUiComponent', () => {
  let component: ZenUiComponent;
  let fixture: ComponentFixture<ZenUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiDataComponent } from './get-api-data.component';

describe('GetApiDataComponent', () => {
  let component: GetApiDataComponent;
  let fixture: ComponentFixture<GetApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetApiDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

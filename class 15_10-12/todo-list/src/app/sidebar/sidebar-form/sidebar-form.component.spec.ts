import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFormComponent } from './sidebar-form.component';

describe('SidebarFormComponent', () => {
  let component: SidebarFormComponent;
  let fixture: ComponentFixture<SidebarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarFormComponent]
    });
    fixture = TestBed.createComponent(SidebarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListComponent } from './sidebar-list.component';

describe('SidebarListComponent', () => {
  let component: SidebarListComponent;
  let fixture: ComponentFixture<SidebarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarListComponent]
    });
    fixture = TestBed.createComponent(SidebarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

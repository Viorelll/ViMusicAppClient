import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistStartComponent } from './playlist-start.component';

describe('PlaylistStartComponent', () => {
  let component: PlaylistStartComponent;
  let fixture: ComponentFixture<PlaylistStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

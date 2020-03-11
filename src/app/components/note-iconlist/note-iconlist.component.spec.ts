import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteIconlistComponent } from './note-iconlist.component';

describe('NoteIconlistComponent', () => {
  let component: NoteIconlistComponent;
  let fixture: ComponentFixture<NoteIconlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteIconlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteIconlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

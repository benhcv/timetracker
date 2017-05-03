import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryListComponent } from './entry-list.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryItemComponent } from '../entry-item/entry-item.component';
import { EntryStoreService } from '../services/entry-store.service';
import { ProjectService } from '../services/project.service';
import { EntryService } from '../services/entry.service';
import { Http } from '@angular/http';

describe('EntryListComponent', () => {
  let component: EntryListComponent;
  let fixture: ComponentFixture<EntryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryListComponent, EntryItemComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [ EntryStoreService, ProjectService, FormBuilder, EntryService, Http ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

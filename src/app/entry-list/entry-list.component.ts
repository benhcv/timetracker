import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ProjectService } from '../services/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntryStoreService } from '../services/entry-store.service';
import { Observable } from 'rxjs/Observable';

@Component( {
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: [ './entry-list.component.css' ],
  providers: []
} )
export class EntryListComponent implements OnInit {

  entries: Observable<any[]> = this.entryStore.entries;
  projects;
  @Output() entryRequest = new EventEmitter();
  entryForm: FormGroup;
  showAddEntry = false;

  constructor( private entryStore: EntryStoreService, private projectService: ProjectService, private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    this.entryStore.fetchAll();
    // this.entries = this.entryService.fecthAll();
    this.projects = this.projectService.fetchAll();
    this.entryForm = this.formBuilder.group( {
      project_name: [ '', Validators.required ],
      task_name: [ '', Validators.required ],
      hours: [ '', Validators.required ],
      workDate: [ '', Validators.required ]
    } );
  }

  handleClick( value: any ) {
    console.log( value );
  }

  addEntry( value: any ) {
    console.log( value );
    this.entryStore.addEntry(value);
    this.entryForm.reset();
  }

  toggleAddEntry() {
    this.showAddEntry = !this.showAddEntry;
  }

}

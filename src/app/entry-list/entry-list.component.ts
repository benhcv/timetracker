import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ProjectService } from '../services/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component( {
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: [ './entry-list.component.css' ],
  providers: [ EntryService ]
} )
export class EntryListComponent implements OnInit {

  entries;
  projects;
  @Output() entryRequest = new EventEmitter();
  entryForm: FormGroup;

  constructor( private entryService: EntryService, private projectService: ProjectService, private formBuilder: FormBuilder ) {

  }

  ngOnInit() {
    this.entries = this.entryService.fecthAll();
    this.projects = this.projectService.fetchAll();
    this.entryForm = this.formBuilder.group( {
      project: [ '', Validators.required ],
      task: [ '', Validators.required ],
      hours: [ '', Validators.required ],
      workDate: [ '', Validators.required ]
    } );
  }

  handleClick( value: any ) {
    console.log( value );
  }

  addEntry( value: any ) {
    console.log( value );
    this.entryService.addEntry(value);
    this.entryForm.reset();
  }

}

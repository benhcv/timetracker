import { Injectable } from '@angular/core';

@Injectable()
export class EntryService {
  entries = [
    {
      project_name: 'First Project',
      task_name: 'Main Task',
      hours: 9
    },
    {
      project_name: 'Second Project',
      task_name: 'Main Task',
      hours: 8
    },
    {
      project_name: 'Third Project',
      task_name: 'Main Task',
      hours: 2
    },
    {
      project_name: 'Fourth Project',
      task_name: 'Main Task',
      hours: 5
    }
  ];

  constructor() {
  }

  fecthAll() {
    return this.entries;
  }

  addEntry( value: any ) {
    this.entries.push( {
      project_name: value.project,
      task_name: value.task,
      hours: value.hours
    } );
  }

}

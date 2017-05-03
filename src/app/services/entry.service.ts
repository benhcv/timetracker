import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';


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

  constructor( private http: Http ) {
  }

  fecthAll(): Observable<any[]> {
    return new Observable( ( subject ) => {
      console.log( 'Added entries...' );
      subject.next( this.entries );
    } );
  }

  fetchEntries(): Observable<any[]> {
    return this.http.get( 'http://localhost:3000/api/entries' ).map( ( res: Response ) => res.json() );
  }

  addEntry( value: any ) {
    return this.http.post( 'http://localhost:3000/api/entries', value ).map( ( res: Response ) => res.json() );
    /*this.entries.push( {
      project_name: value.project,
      task_name: value.task,
      hours: value.hours
    } );*/
  }

}

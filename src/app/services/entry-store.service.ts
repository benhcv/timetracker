import { Injectable } from '@angular/core';
import { EntryService } from './entry.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntryStoreService {

  private _entries: BehaviorSubject<any[]> = new BehaviorSubject( [] );
  public entries: Observable<any[]> = this._entries.asObservable();

  constructor( private entriesService: EntryService ) {
    this.fetchAll();
  }

  fetchAll() {
    this.entriesService.fetchEntries().subscribe(
      ( data ) => {
        console.log( `STORE: ${data}` );
        this._entries.next( data );
      },
      ( error ) => {
        console.log( `${error}` );
      }
    );
  }

  addEntry( values: any ) {
    values = Object.assign({userId: '1'}, values);
    this.entriesService.addEntry( values ).subscribe(
      ( data ) => {
        console.log( `Save data: ${JSON.stringify(data)}` );
        this.fetchAll();
      },
      ( error ) => {
        console.log( `Error data: ${error}` );
      }
    );
  }
}

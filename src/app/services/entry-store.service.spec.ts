import { TestBed, inject } from '@angular/core/testing';

import { EntryStoreService } from './entry-store.service';
import { EntryService } from './entry.service';

describe('EntryStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryStoreService, EntryService]
    });
  });

  it('should ...', inject([EntryStoreService], (service: EntryStoreService) => {
    expect(service).toBeTruthy();
  }));
});

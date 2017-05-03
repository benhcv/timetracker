import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { EntryStoreService } from './services/entry-store.service';
import { EntryService } from './services/entry.service';

const appRoutes: Routes = [
  {path: 'entry-list', component: EntryListComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: '', redirectTo: '/entry-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryItemComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [EntryStoreService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectionComponent } from './selection/selection.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FocusDirective } from 'src/directives/focus.directive';
import { FocusConsoleDirective } from 'src/directives/focus2.directive';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    FocusDirective,
    FocusConsoleDirective
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UcesnikDialogComponent } from './components/dialogs/ucensik-dialog/ucesnik-dialog.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //1.
import { AppRoutingModule } from './app-routing.module'; //2.
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; //3.
import {MatButtonModule} from '@angular/material/button';//4.
import {MatIconModule} from '@angular/material/icon';//5.
import {MatSidenavModule} from '@angular/material/sidenav';//6.
import {MatListModule} from '@angular/material/list';//7.
import {MatGridListModule} from '@angular/material/grid-list';//8.
import {MatExpansionModule} from '@angular/material/expansion';//9.
import { SudComponent } from './components/main/sud/sud.component';
import { UcesnikComponent } from './components/main/ucesnik/ucesnik.component';
import { PredmetComponent } from './components/main/predmet/predmet.component';
import { AuthorComponent } from './components/utility/author/author.component';
import { AboutComponent } from './components/utility/about/about.component';
import { HomeComponent } from './components/utility/home/home.component';
import {HttpClientModule} from '@angular/common/http';//10.
import {MatTableModule} from '@angular/material/table';//11.
import {MatToolbarModule} from '@angular/material/toolbar';//12.
import { SudDialogComponent } from './components/dialogs/sud-dialog/sud-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';//13.
import {MatDialogModule} from '@angular/material/dialog';//14.
import { MatFormFieldModule } from '@angular/material/form-field';//15.
import { MatInputModule} from '@angular/material/input';//16.
import {FormsModule} from '@angular/forms';//17.
import { PredmetDialogComponent } from './components/dialogs/predmet-dialog/predmet-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';//18.
import {MatNativeDateModule} from '@angular/material/core';//19.
import {MatSelectModule} from '@angular/material/select';//20.
import {MatCheckboxModule} from '@angular/material/checkbox';//21.
import {MatSortModule} from '@angular/material/sort';//22.
import {MatPaginatorModule} from '@angular/material/paginator';//23.
import { RocisteComponent } from './components/main/rociste/rociste.component';
import { RocisteDialogComponent } from './components/dialogs/rociste-dialog/rociste-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SudComponent,
    UcesnikComponent,
    PredmetComponent,
    AuthorComponent,
    AboutComponent,
    HomeComponent,
    SudDialogComponent,
    UcesnikDialogComponent,
    PredmetDialogComponent,
    RocisteComponent,
    RocisteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

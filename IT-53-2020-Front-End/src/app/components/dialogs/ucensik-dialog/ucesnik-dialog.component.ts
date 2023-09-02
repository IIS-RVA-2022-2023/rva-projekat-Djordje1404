import { UcesnikService } from './../../../service/ucesnik.service';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ucesnik } from 'src/app/models/ucesnik';
import { onErrorResumeNextWith } from 'rxjs';

@Component({
  selector: 'app-ucesnik-dialog',
  templateUrl: './ucesnik-dialog.component.html',
  styleUrls: ['./ucesnik-dialog.component.css']
})
export class UcesnikDialogComponent {

  flag!:number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<Ucesnik>,
              @Inject(MAT_DIALOG_DATA) public data: Ucesnik,
              public UcesnikService: UcesnikService){

  }

  public add():void{
    this.UcesnikService.addUcesnik(this.data).subscribe(
      () => {
        this.snackBar.open('Ucesnik sa imenom: ' + this.data.ime + 'je uspesno kreiran',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message)
      this.snackBar.open('Kreiranje ucesnika je neuspesno', 'Ok', {duration:2500});
    }
  }

  public update():void{
    this.UcesnikService.updateUcesnik(this.data).subscribe(
      () => {
        this.snackBar.open('Ucesnik sa ID: ' + this.data.id + 'je uspesno modifikovan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Modifikovanje ucesnika je neuspesno', 'Ok', {duration:2500});
    }
  }

  public delete():void{
    this.UcesnikService.deleteUcesnik(this.data.id).subscribe(
      () => {
        this.snackBar.open('Ucesnik sa ID: ' + this.data.id + ' je uspesno obrisan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message)
      this.snackBar.open('Brisanje ucesnika je neuspesno', 'Ok', {duration:2500});
    }
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500});
  }
}

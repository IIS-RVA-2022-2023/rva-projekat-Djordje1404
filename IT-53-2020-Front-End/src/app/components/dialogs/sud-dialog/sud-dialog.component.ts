import { SudService } from './../../../service/sud.service';
import { Component, Inject } from '@angular/core';
import { Sud } from 'src/app/models/sud';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sud-dialog',
  templateUrl: './sud-dialog.component.html',
  styleUrls: ['./sud-dialog.component.css']
})
export class SudDialogComponent {

  flag!: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<Sud>,
              @Inject(MAT_DIALOG_DATA) public data: Sud,
              public sudService: SudService){

  }


  public add():void{
    this.sudService.addSud(this.data).subscribe(
      () => {
        this.snackBar.open('Sud sa nazivom: ' + this.data.naziv + ' je uspesno kreiran',
        'Ok', {duration:3500})
      }
    ),
    (error:Error)=>{console.log(error.name + ' ' + error.message)
    this.snackBar.open('Kreiranje suda je neuspesno', 'Ok', {duration:3500})};
  }

  public update():void{
    this.sudService.updateSud(this.data).subscribe(
      () => {
        this.snackBar.open('Sud sa ID: ' + this.data.id + ' je uspesno modifikovan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error)=>{console.log(error.name + ' ' + error.message)
    this.snackBar.open('Modifikovanje suda je neuspesno', 'Ok', {duration:3500})};
  }

  public delete():void{
    this.sudService.deleteSud(this.data.id).subscribe(
      () => {
        this.snackBar.open('Sud je uspesno obrisan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error)=>{console.log(error.name + ' ' + error.message)
    this.snackBar.open('Brisanje suda je neuspesno', 'Ok', {duration:3500})};
  }


  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500});
  }
}

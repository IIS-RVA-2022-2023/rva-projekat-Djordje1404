import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Predmet } from 'src/app/models/predmet';
import { SudService } from 'src/app/service/sud.service';
import {PredmetService} from './../../../service/predmet.service';
import { Sud } from 'src/app/models/sud';

@Component({
  selector: 'app-predmet-dialog',
  templateUrl: './predmet-dialog.component.html',
  styleUrls: ['./predmet-dialog.component.css']
})
export class PredmetDialogComponent implements OnInit{
  flag!: number;
  sudovi!: Sud[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<Predmet>,
              @Inject(MAT_DIALOG_DATA) public data: Predmet,
              public predmetService: PredmetService,
              public sudService: SudService){

  }
  ngOnInit(): void {
    this.sudService.getAllSuds().subscribe(
      data => {
        this.sudovi = data;
      }
    )
  }

  public compare (a:any, b:any){
    return a.id == b.id;
  }

  public add():void{
    this.predmetService.addPredmet(this.data).subscribe(
      () => {
        this.snackBar.open('Predmet sa nazivom: ' + this.data.brojPr + 'je uspešno kreiran',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Kreiranje predmeta je neuspešno', 'Ok', {duration:2500});
    }
  }

  public update():void{
    this.predmetService.updatePredmet(this.data).subscribe(
      () => {
        this.snackBar.open('Predmet sa ID: ' + this.data.id + 'je uspešno modifikovan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Modifikovanje predmeta je neuspešno', 'Ok', {duration:2500});
    }
  }

  public delete():void{
    this.predmetService.deletePredmet(this.data.id).subscribe(
      () => {
        this.snackBar.open('Predmet sa ID: ' + this.data.id + ' je uspesno obrisan',
        'Ok', {duration:3500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Brisanje predmeta je neuspesno', 'Ok', {duration:2500});
    }
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500});
  }
}


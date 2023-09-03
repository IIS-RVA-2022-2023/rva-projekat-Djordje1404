import { PredmetService } from './../../../service/predmet.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Predmet } from 'src/app/models/predmet';
import { Ucesnik } from 'src/app/models/ucesnik';
import { RocisteService } from 'src/app/service/rociste.service';
import { Rociste } from 'src/app/models/rociste';
import { UcesnikService } from 'src/app/service/ucesnik.service';

@Component({
  selector: 'app-rociste-dialog',
  templateUrl: './rociste-dialog.component.html',
  styleUrls: ['./rociste-dialog.component.css']
})
export class RocisteDialogComponent {

  flag!: number;
  predmeti!: Predmet[];
  ucesnici!: Ucesnik[];

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<Rociste>,
    @Inject(MAT_DIALOG_DATA) public data: Rociste,
    public rocisteService: RocisteService,
    public ucesnikService: UcesnikService,
    public predmetService: PredmetService){
}
  ngOnInit(): void {
    this.ucesnikService.getAllUcesnik().subscribe(
      data => {
        this.ucesnici = data;
      }
    )

    this.predmetService.getAllPredmet().subscribe(
      data => {
        this.predmeti = data;
      }
    )
  }
public compare(a:any, b:any){
  return a.id == b.id;
}

public add():void{
  this.rocisteService.addRociste(this.data).subscribe(
    () => {
      this.snackBar.open('Rociste sa datumom: ' + this.data.datumRocista + ' je uspesno kreiran',
      'Ok', {duration:3500})
    }
  ),
  (error:Error)=>{console.log(error.name + ' ' + error.message)
  this.snackBar.open('Kreiranje rocista je neuspesno', 'Ok', {duration:3500})};
}

public update():void{
  this.rocisteService.updateRociste(this.data).subscribe(
    () => {
      this.snackBar.open('Rociste sa ID: ' + this.data.id + ' je uspešno modifikovan',
      'Ok', {duration:3500})
    }
  ),
  (error:Error)=>{console.log(error.name + ' ' + error.message)
  this.snackBar.open('Modifikovanje rocista je neuspesno', 'Ok', {duration:3500})};
}

public delete():void{
  this.rocisteService.deleteRociste(this.data.id).subscribe(
    () => {
      this.snackBar.open('Rociste je uspesno obrisano',
      'Ok', {duration:3500})
    }
  ),
  (error:Error)=>{console.log(error.name + ' ' + error.message)
  this.snackBar.open('Brisanje rocista je neuspesno', 'Ok', {duration:3500})};
}


public cancel():void{
  this.dialogRef.close();
  this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500});
}

}

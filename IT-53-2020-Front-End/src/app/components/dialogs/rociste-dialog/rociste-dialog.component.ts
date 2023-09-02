import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Rociste } from "src/app/models/rociste";
import { Sud } from "src/app/models/sud";
import { RocisteService } from "src/app/service/rociste.service";
import { SudService } from "src/app/service/sud.service";

@Component({
    selector: 'app-rociste-dialog',
    templateUrl: './rociste-dialog.component.html',
    styleUrls: ['./rociste-dialog.component.css']
  })
  export class RocisteDialogComponent {
  
    flag!:number;
    sudovi!: Sud[];
  
    constructor(public snackBar:MatSnackBar,
                public dialogRef: MatDialogRef<Rociste>,
                @Inject(MAT_DIALOG_DATA) public data: Rociste,
                public rocisteService:RocisteService,
                public sudService:SudService){}
  
    ngOnInit(): void {
      this.sudService.getAllSuds().subscribe(
        data => {
          this.sudovi = data;
        }
      )
    }
  
  public compare(a:any,b:any){
    return a.id = b.id;
  }
  
  public add():void{
    this.rocisteService.addRociste(this.data).subscribe(
      () => {
        this.snackBar.open('Ročište je uspešno dodato!', 'Ok', {duration:4500});
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greška', 'Ok', {duration:2500});
    }
  }
  
  public update():void{
    this.rocisteService.updateRociste(this.data).subscribe(
      () => {
        this.snackBar.open('Ročište sa ID: ' + this.data.id + ' je uspešno izmenjeno!', 'Ok', {duration:4500});
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greška', 'Ok', {duration:2500});
    }
  }
  
  public delete():void{
    this.rocisteService.deleteRociste(this.data.id).subscribe(
      () => {
        this.snackBar.open('Ročište je izbrisano!', 'Ok', {duration:4500});
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greška', 'Ok', {duration:2500});
    }
  }
  
  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok', {duration:2500})
  }
  }
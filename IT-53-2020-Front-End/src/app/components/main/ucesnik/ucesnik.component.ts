import { UcesnikService } from './../../../service/ucesnik.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ParseFlags } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { Ucesnik } from 'src/app/models/ucesnik';
import { UcesnikDialogComponent } from '../../dialogs/ucensik-dialog/ucesnik-dialog.component';
//import 'tslib';


@Component({
  selector: 'app-ucesnik',
  templateUrl: './ucesnik.component.html',
  styleUrls: ['./ucesnik.component.css']
})
export class UcesnikComponent implements OnInit,OnDestroy{
  displayedColumns = ['id', 'ime', 'prezime', 'mbr', 'status', 'actions'];
  dataSource!: MatTableDataSource<Ucesnik>;

  subscription!:Subscription;


  constructor(private UcesnikService: UcesnikService,
              public dialog:MatDialog){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.UcesnikService.getAllUcesniks().subscribe(
      data => {
        //console.log(data);}
        this.dataSource = new MatTableDataSource(data);}
        )
      ,(error: Error) => {console.log(error.name + ' ' + error.message);
    };
    // this.subscription = this.UcesnikService.getAllUcesniks().subscribe(
    //   (data: Ucesnik[]) => {
    //     this.dataSource = new MatTableDataSource(data);
    //   },
    //   (error: Error) => {
    //     console.log(error.name + ' ' + error.message);
    //   }
    // );
    
  }

  public openDialog(flag:number, id?:number, ime?:string, prezime?:string, mbr?:string, status?:string):void{
    const dialogRef = this.dialog.open(UcesnikDialogComponent, {data:{id,ime,prezime,mbr,status}});
    dialogRef.componentInstance.flag=flag;
    dialogRef.afterClosed().subscribe(
      result => {
        if(result==1){
          this.loadData();
        }
      }
    )
    
    // dialogRef.afterClosed().subscribe(
    //   // @ts-ignore
    //   result => {
    //     if (result == 1) {
    //       this.loadData();
    //     }
    //   }
    // );
    
      
  }
}

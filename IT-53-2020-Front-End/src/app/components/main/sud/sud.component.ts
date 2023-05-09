import { SudDialogComponent } from './../../dialogs/sud-dialog/sud-dialog.component';
import { SudService } from './../../../service/sud.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Sud } from 'src/app/models/sud';
import { Subscription } from 'rxjs';
import { ParseFlags } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sud',
  templateUrl: './sud.component.html',
  styleUrls: ['./sud.component.css']
})
export class SudComponent implements OnInit,OnDestroy{
  displayedColumns = ['id', 'naziv', 'adresa', 'actions'];
  dataSource!: MatTableDataSource<Sud>;

  subscription!:Subscription;


  constructor(private SudService: SudService,
              public dialog:MatDialog){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.SudService.getAllSuds().subscribe(
      data => {
        //console.log(data);}
        this.dataSource = new MatTableDataSource(data);}
        )
      ,(error: Error) => {console.log(error.name + ' ' + error.message);
    };
  }

  public openDialog(flag:number, id?:number, naziv?:string, adresa?:string):void{
    const dialogRef = this.dialog.open(SudDialogComponent, {data:{id,naziv,adresa}});
    dialogRef.componentInstance.flag=flag;
    dialogRef.afterClosed().subscribe(
      result => {
        if(result==1){
          this.loadData();
        }
      }
    )
  
  }
}

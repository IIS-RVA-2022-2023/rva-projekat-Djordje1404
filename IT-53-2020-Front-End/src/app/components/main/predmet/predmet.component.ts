import { PredmetService } from './../../../service/predmet.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Predmet } from 'src/app/models/predmet';
import { PredmetDialogComponent } from '../../dialogs/predmet-dialog/predmet-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Sud } from 'src/app/models/sud';
 

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit, OnDestroy{
  
  
  displayColumns = ['id', 'brojPr', 'opis', 'datumPocetka', 'aktivan', 'sud', 'actions'];
  dataSource!: MatTableDataSource<Predmet>;

  subscription!:Subscription;

  @ViewChild(MatSort,{static:false}) sort!:MatSort; //dodati za ostale komp
  @ViewChild(MatPaginator,{static:false}) paginator!:MatPaginator;

  //parentSelectedPredmet!:Predmet;

  constructor(private predmetService: PredmetService,
              public dialog:MatDialog){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.predmetService.getAllPredmet().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        }
      ),
      (error: Error) => {console.log(error.name + ' ' + error.message)
    };
  }
  public openDialog(flag:number, id?:number, brojPr?:string, opis?:string, datumPocekta?:Date, aktivan?:boolean, sud?: Sud):void{
    const dialogRef = this.dialog.open(PredmetDialogComponent, {data: {id, brojPr, opis, datumPocekta, aktivan, sud}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(
      result => {
        if(result == 1){
          this.loadData();
        }
      }
    );
  
  }

  public applyFilter(filter:any){
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  } //dodati i za ostale komponente

  // public selectRow(row:Predmet):void{
  //   this.parentSelectedPredmet = row;
  // }

  
}



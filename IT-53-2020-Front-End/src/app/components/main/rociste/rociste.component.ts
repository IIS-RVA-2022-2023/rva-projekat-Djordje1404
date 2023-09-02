import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import { Predmet } from "src/app/models/predmet";
import { Rociste } from "src/app/models/rociste";
import { Ucesnik } from "src/app/models/ucesnik";
import { RocisteService } from "src/app/service/rociste.service";
import { RocisteDialogComponent } from "../../dialogs/rociste-dialog/rociste-dialog.component";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";


@Component({
    selector: 'app-rociste',
    templateUrl: './rociste.component.html',
    styleUrls: ['./rociste.component.css']
  })
  export class RocisteComponent implements OnInit,OnDestroy,OnChanges {
  
    dataSource!: MatTableDataSource<Rociste>;
    displayedColumns = ['id','datumRocista','sudnica','ucesnik','predmet','actions'];
    subscription!:Subscription;

    @ViewChild(MatSort,{static:false}) sort!:MatSort; 
    @ViewChild(MatPaginator,{static:false}) paginator!:MatPaginator;
  
    @Input() childSelectedPredmet!: Predmet;
  
    constructor(private rocisteService: RocisteService,
                public dialog: MatDialog){
  
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if(this.childSelectedPredmet.id){
        this.loadData();
      }
    }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  
    ngOnInit(): void {
      this.loadData();
    }
  
    public loadData(){
      this.subscription = this.rocisteService.getRocistaForPredmet(this.childSelectedPredmet.id).subscribe(
        data => {this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
                console.log(data)}),
        (error:Error) => {console.log(error.name + ' ' + error.message);}
    }
  
    public openDialog(flag:number, id?:number, datumRocista?:Date, sudnica?:string, ucesnik?:Ucesnik, predmet?:Predmet):void{
      const dialogRef = this.dialog.open(RocisteDialogComponent, {data:{id,datumRocista,sudnica,ucesnik,predmet}});
      dialogRef.componentInstance.flag = flag;
      dialogRef.componentInstance.data.predmet = this.childSelectedPredmet;
      dialogRef.afterClosed().subscribe(
        result =>{
          if(result == 1){
            this.loadData();
          }
        }
      )
    }

    public applyFilter(filter:any){
      filter = filter.target.value;
      filter = filter.trim();
      filter = filter.toLocalLowerCase();
      this.dataSource.filter = filter;
      
    } 
  }
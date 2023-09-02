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
  
    
    displayedColumns = ['id','datumRocista','sudnica','predmet','actions'];
    dataSource!: MatTableDataSource<Rociste>;
    subscription!:Subscription;

    @ViewChild(MatSort,{static:false}) sort!:MatSort; 
    @ViewChild(MatPaginator,{static:false}) paginator!:MatPaginator;
  
    @Input() childSelectedUcesnik!: Ucesnik;
  
    constructor(private rocisteService: RocisteService,
                public dialog: MatDialog){
  
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if(this.childSelectedUcesnik.id){
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
      this.subscription = this.rocisteService.getRocistaforUcesnik(this.childSelectedUcesnik.id).subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
                // console.log(data)
        }),
        (error:Error) => {console.log(error.name + ' ' + error.message)};
    }
  
    public openDialog(flag:number, id?:number, datumRocista?:Date, sudnica?:string, predmet?:Predmet):void{
      const dialogRef = this.dialog.open(RocisteDialogComponent, {data:{id,datumRocista,sudnica,predmet}});
      dialogRef.componentInstance.flag = flag;
      dialogRef.componentInstance.data.ucesnik = this.childSelectedUcesnik;
      dialogRef.afterClosed().subscribe(
        result =>{
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
    }
  }
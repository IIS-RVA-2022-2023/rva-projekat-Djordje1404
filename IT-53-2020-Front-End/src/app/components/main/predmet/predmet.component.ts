import { PredmetService } from './../../../service/predmet.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Predmet } from 'src/app/models/predmet';
import { PredmetDialogComponent } from '../../dialogs/predmet-dialog/predmet-dialog.component';
 

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent {
  
  dataSource!: MatTableDataSource<Predmet>;
  displayColumns = ['id', 'brojPr', 'opis', 'datumPocetka', 'aktivan', 'sud', 'actions']

  subscription!:Subscription;


  constructor(private PredmetService: PredmetService,
              public dialog:MatDialog){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.PredmetService.getAllPredmets().subscribe(
      data => {
        //console.log(data);}
        this.dataSource = new MatTableDataSource(data);}
        )
      ,(error: Error) => {console.log(error.name + ' ' + error.message);
    };
  }
  public openDialog(flag:number, id?:number, brojPr?:string, opis?:string, datumPocekta?:Date, aktivan?:boolean):void{
    const dialogRef = this.dialog.open(PredmetDialogComponent, {data:{id,brojPr,opis, datumPocekta, aktivan}});
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

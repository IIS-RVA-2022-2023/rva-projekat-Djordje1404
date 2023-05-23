import { HttpClient } from '@angular/common/http';
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

  parentSelectedPredmet!:Predmet;

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
        this.dataSource = new MatTableDataSource(data);
        }
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

  public selectRow(row:Predmet):void{
    this.parentSelectedPredmet = row;
  }

  
}

// u 4. komponenti  components.ts
//   @input() childSelectedPredmet!: Predmet;

// 4.komp component.html dole skroz
//   <div class="container mat-elevation-z8"
//   <app-4.komp 
//   *ngIf="parentSelectedPredmet" 
//   [chiledSelectedPredmet] = "parentSelectedPredmet">
//   </app-4.komp>
//   </div>

//4. komp service ts
// public getStavkeForPorudzbina(idPorudzbine:number):Observable<any>{
//   return this.HttpClient.get(`STAVKE_ZA_PORUDZBINU_URL/$(idStavke)`)
// }

//4.komp comp ts
//izmeniti nesto u public loadData()

//4. komp comp ts
// implements OnInit, OnDestroy, OnChanges 
//import metoda za OnChanges

//u ngOnChanges metodi:
// if(this.childSelectedPorudzbina.id){
//   this.loadData();
// }

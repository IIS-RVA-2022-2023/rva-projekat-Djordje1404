import { SudService } from './../../../service/sud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sud',
  templateUrl: './sud.component.html',
  styleUrls: ['./sud.component.css']
})
export class SudComponent implements OnInit{

  constructor(private SudService: SudService){}
  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.SudService.getAllSuds().subscribe(
      data => {console.log(data);})
      ,(error: Error) => {console.log(error.name + ' ' + error.message);
    };
  }
}

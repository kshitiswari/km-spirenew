import { Component , OnInit} from '@angular/core';
import {HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  viewmode:string='housing';
  url="./assets/files/test.txt";
  txt:any="";
  
  constructor(private http:HttpClient){ }

  ngOnInit(){
    this.http.get(this.url,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            // console.log(this.txt);
          });
  }
 
}

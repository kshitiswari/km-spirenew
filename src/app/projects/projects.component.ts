import { Component , OnInit} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  viewmode:string='housing';
  url1="./assets/files/housing.txt";
  url2="./assets/files/institutional.txt";
  url3="./assets/files/commercial.txt";
  url4="./assets/files/interior.txt";

  
  txt:any;
  file1:any[]=[];
  file2:any[]=[];
  file3:any[]=[];
  file4:any[]=[];
  line:any;
  constructor(private http:HttpClient){ }

  ngOnInit(){
  
     this.http.get(this.url1,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            for (const line of this.txt.split(/[\r\n]+/)) {
              this.line=line;
              this.file1.push(this.line);
            }
          }); 

          this.http.get(this.url2,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            for (const line of this.txt.split(/[\r\n]+/)) {
              this.line=line;
              this.file2.push(this.line);
            }
          }); 
          this.http.get(this.url3,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            for (const line of this.txt.split(/[\r\n]+/)) {
              this.line=line;
              this.file3.push(this.line);
            }
          }); 

          this.http.get(this.url4,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            for (const line of this.txt.split(/[\r\n]+/)) {
              this.line=line;
              this.file4.push(this.line);
            }
          });
        
         
          
  }



 /*  getFiles(url: string):Observable<File> {
    return this.http.get<File>(url, {responseType: "text"});
  }
  getFile() {
    this.apiService.getFiles('http://127.0.0.1:8000/media/results/MINERvA/CC0pi/v1.0/nuwro.txt').subscribe(file => {
      this.resultFile = file;
      console.log(this.resultFile);
    });
  } */
 
}

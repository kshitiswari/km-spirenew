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
  url="./assets/files/test.txt";
  txt:any;
  file1:any[]=[];
  line:any;
  constructor(private http:HttpClient){ }

  ngOnInit(){
     this.http.get(this.url,{responseType:'text'})
          .subscribe(response =>{
            this.txt=response;
            //console.log(this.txt);
            for (const line of this.txt.split(/[\r\n]+/)) {
              this.line=line;
              this.file1.push(this.line);
              //console.log(line);

              //this.file1.push(line);
            }
            //console.log(typeof(this.line));
            //console.log(this.file1);
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

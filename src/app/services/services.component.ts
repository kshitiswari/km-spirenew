import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
text1:string;
text2:string;
text3:string;
text4:string;
text5:string;

  constructor() {
    this.text1="We express the creative talents in a way which is more effective, produces a better building for the clients and the users, and create a more profound and satisfying results.";
this.text2="  Mechanical innovations in setting out not only the foundations of a building but also giving a transparency to the structure though keeping the safety and stability of thructure in mind.";
this.text3="  We extended the interior services in shaping the spatial volume as well as surface treatment. Acute selection of materials with estimation. We also extend our interior practice in various desciplines, such as residential and commercial design, with some developing expertise within a neich design area such as hospitality, health care and institutional design. ";
this.text4=" We offer changes in process for consequitive layout and sitting of buildings in urban design and construction of city centers.";
this.text5=" We offer landscaping services, garden design services, landscaping designing services, garden building services, tree planting services, and garden maintenance services.";
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatzone',
  templateUrl: './chatzone.component.html',
  styleUrls: ['./chatzone.component.css']
})
export class ChatzoneComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
      
    var navbtn = <HTMLElement><any> document.getElementsByClassName('nav-show-btn')[0];
    navbtn.style.display = "none";


  }

}

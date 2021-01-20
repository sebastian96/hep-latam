import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate = new Date();
  currentYear: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = this.currentDate.getFullYear();
  }



}

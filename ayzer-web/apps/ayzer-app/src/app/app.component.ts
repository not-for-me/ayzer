import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: string = 'Ayzer';
  isLoading: boolean = true;
  isSideNaveOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    const MOCK_LOAD_DELAY = 1500;
    setTimeout(() => this.isLoading = false, MOCK_LOAD_DELAY);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public date = new Date(); // TODO: Research how to format date to not look like poopy

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-page-header',
  templateUrl: './component-page-header.component.html',
  styleUrls: ['./component-page-header.component.scss']
})
export class ComponentPageHeaderComponent implements OnInit {
  @Input() headerTitle = 'Header Title';

  constructor() { }

  ngOnInit() {
  }

}

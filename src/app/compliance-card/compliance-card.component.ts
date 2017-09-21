import { Component, OnInit, Input } from '@angular/core';
import { Compliance } from "../models/compliance";

@Component({
  selector: 'compliance-card',
  templateUrl: './compliance-card.component.html',
  styleUrls: ['./compliance-card.component.css']
})
export class ComplianceCardComponent  {
  @Input('compliance') compliance: Compliance;
  @Input('show-actions') showActions = true;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ComplianceService } from "../services/auth/compliance/compliance.service";
import { ActivatedRoute } from "@angular/router";
import { Compliance } from "../models/compliance";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-compliances',
  templateUrl: './compliances.component.html',
  styleUrls: ['./compliances.component.css']
})
export class CompliancesComponent{
  compliances: Compliance[] = [];
  filteredCompliances: Compliance[] = [];
  company: string;

  constructor (
    route: ActivatedRoute,
    complianceService: ComplianceService) {

    complianceService
      .getAll()
      .switchMap(compliances => {
      this.compliances = compliances;
      return route.queryParamMap;
      })     
      .subscribe(params => {
        this.company = params.get('company');

        this.filteredCompliances = (this.company) ?
          this.compliances.filter(c => c.company === this.company) :
          this.compliances;
      }); 
   }
}

import { Component, OnInit } from '@angular/core';
import { ComplianceService } from "../services/auth/compliance/compliance.service";
import { CompanyService } from "../services/auth/company.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-compliances',
  templateUrl: './compliances.component.html',
  styleUrls: ['./compliances.component.css']
})
export class CompliancesComponent{
  compliances$;
  companies$;
  company: string;

  constructor (
    route: ActivatedRoute,
    complianceService: ComplianceService, 
    companyService: CompanyService ) 
    
    {
    this.compliances$ = complianceService.getAll();
    this.companies$ = companyService.getCompanies();

    route.queryParamMap.subscribe(params => {
      this.company = params.get('company');
    });
   }
}
// npm install webpack && npm install webpack-dev-serve
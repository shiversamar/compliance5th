import { CompanyService } from '../../services/auth/company.service';
import { Component, OnInit } from '@angular/core';
import { ComplianceService } from '../../services/auth/compliance/compliance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compliance-form',
  templateUrl: './compliance-form.component.html',
  styleUrls: ['./compliance-form.component.css']
})
export class ComplianceFormComponent implements OnInit {
  companies$;

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private complianceService: ComplianceService ) { 
    this.companies$ = companyService.getCompanies();
  }


  save(compliance) {
    this.complianceService.create(compliance);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit() {
  }

}

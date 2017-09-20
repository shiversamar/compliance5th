import { Component, OnInit } from '@angular/core';
import { ComplianceService } from "../../services/auth/compliance/compliance.service";

@Component({
  selector: 'app-admin-compliance',
  templateUrl: './admin-compliance.component.html',
  styleUrls: ['./admin-compliance.component.css']
})
export class AdminComplianceComponent implements OnInit {
  compliances$;

  constructor(private complianceService: ComplianceService) { 
    this.compliances$ = this.complianceService.getAll(); 
  }

  ngOnInit() {
  }

}

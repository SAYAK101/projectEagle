import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WorkExperienceDto } from 'src/app/features/Shared/material/models/work-experience-dto';
import { WorkExperienceComponent } from './professionInfo/work-experience/work-experience.component';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  contactInfoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    longAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    telePhone: new FormControl(''),
    emailAddress: new FormControl(''),
    linkdInProfile: new FormControl(''),
  })

  table_DATA: WorkExperienceDto[] = [];
  professionForm = new FormGroup({
    profession: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorkExperienceComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.table_DATA = [...this.table_DATA, result]
    });
  }

}

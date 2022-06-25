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

    dialogRef.afterClosed().subscribe((result: WorkExperienceDto) => {
      if(result){
        let id = this.table_DATA.length;
        result.id = id;
        this.table_DATA = [...this.table_DATA, result];
      }
    });
  }

  editDialog(index: number): void {
    let getData = this.table_DATA.find(x => x.id === index)
    const dialogRef = this.dialog.open(WorkExperienceComponent, {
      width: '600px',
      data : getData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let getData = this.table_DATA.find(x => x.id === result.id);
        getData = result;
      }
    });
  }

  deleteItem(deleteItem: number) {
    this.table_DATA.splice(deleteItem, 1);
    this.table_DATA = [...this.table_DATA];
  }

}

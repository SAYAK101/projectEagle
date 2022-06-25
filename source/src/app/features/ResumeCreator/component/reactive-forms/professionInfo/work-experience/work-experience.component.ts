import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkExperienceDto } from 'src/app/features/Shared/material/models/work-experience-dto';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  tenure = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 1)),
    end: new FormControl(new Date(this.year, this.month, 28)),
  });

  workExp = new FormGroup({
    name: new FormControl('', Validators.required),
    jobDescription: new FormControl('', Validators.required),
    campaignOne: this.tenure
  });

  get nameControl() {
    return this.workExp.get('name') as FormControl;
  }

  get jdControl() {
    return this.workExp.get('jobDescription') as FormControl;
  }

  get tenureGet() {
    return this.workExp.get('campaignOne') as FormGroup;
  }

  constructor(public dialogRef: MatDialogRef<WorkExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkExperienceDto) {
      if(data){
        this.workExp.get('name')?.patchValue(data.jobName);
        this.workExp.get('jobDescription')?.patchValue(data.jobDescription);
        this.tenureGet.get('start')?.patchValue(data.startDate);
        this.tenureGet.get('end')?.patchValue(data.endDate);
      }
     }

  ngOnInit() {
  }

  onSaveClick(): void {
    if(this.workExp.valid){
      this.setData();
      this.dialogRef.close(this.data);
    }
  }

  private setData() {
    if (!this.data) {
      this.data = new WorkExperienceDto;
    }
    this.data.jobName = this.workExp.get('name')?.value;
    this.data.jobDescription = this.workExp.get('jobDescription')?.value;
    this.data.startDate = this.tenureGet.get('start')?.value;
    this.data.endDate = this.tenureGet.get('end')?.value;
    this.data.isPresent = this.data.endDate === this.today.toString();
    this.data.tenure = this.calculateDiff(this.data.startDate, this.data.isPresent ? this.today : this.data.endDate);
  }

  private calculateDiff(startDate : any, endDate : any){
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    return Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) ) /(1000 * 60 * 60 * 24));
}
}

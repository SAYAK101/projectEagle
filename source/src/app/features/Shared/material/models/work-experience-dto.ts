export class WorkExperienceDto implements IworkExperience{
  tenure: number = 0;
  jobName: string = '';
  jobDescription: string = '';
  startDate: string = '1/1/2022';
  endDate: string = '1/1/2022';
  isPresent: boolean = false;
}

export interface IworkExperience{
  jobName: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
  tenure: number;
  isPresent: boolean;
}

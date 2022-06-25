export class WorkExperienceDto implements IworkExperience{
  id: number = 0;
  tenure: number = 0;
  jobName: string = '';
  jobDescription: string = '';
  startDate: string = '1/1/2022';
  endDate: string = '1/1/2022';
  isPresent: boolean = false;
}

export interface IworkExperience{
  id: number;
  jobName: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
  tenure: number;
  isPresent: boolean;
}

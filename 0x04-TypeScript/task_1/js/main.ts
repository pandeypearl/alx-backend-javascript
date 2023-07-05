export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

// Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

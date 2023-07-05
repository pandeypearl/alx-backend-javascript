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

// Printing Teachers
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Student Class Constructor
export interface NStudentClassConstructor {
  new (firstName: string, lastName: string): NStudentClass;
}

export interface NStudentClass {
  workOnHomeWork(): string;
  displayName(): string;
}

export class StudentClass implements NStudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}

export function createStudent(ctor: NStudentClassConstructor, firstName: string, lastName: string): NStudentClass {
 return new ctor(firstName, lastName);
}

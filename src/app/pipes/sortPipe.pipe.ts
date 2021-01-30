import { PipeTransform, Pipe, Injectable } from '@angular/core';

@Pipe({
  name: 'sortemployee'
})

@Injectable()
export class SortEmployeeListPipe implements PipeTransform {
  transform(EmployeeArray: any) {
    return EmployeeArray.sort((a,b) => {
      return a.fname.localeCompare(b.fname);
    });
  }
}

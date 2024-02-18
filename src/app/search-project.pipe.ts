import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(!args) {
      return value;
    }
     
    return value.filter(
      (item : any) => item?.title?.toLowerCase().indexOf(args.toLowerCase()) > -1
   );
  }
}


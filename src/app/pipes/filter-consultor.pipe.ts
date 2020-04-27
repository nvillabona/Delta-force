import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterConsultor'
})
export class FilterConsultorPipe implements PipeTransform {

  transform(value: any, campo:string, args: string): any {
    if (!value)return null;
    if (!args)return value;
    
    
    return value.filter(singleItem =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase())
      );
      
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concate',
  standalone: true
})
export class ConcatePipe implements PipeTransform {

  // variable argument
  transform(symbol : string, ...strArr: string[]): string {
    let resultStr : string = "";
    for(let str of strArr){
      resultStr = resultStr.concat(str);
      resultStr = resultStr.concat(symbol);
    }
    return resultStr;
  }

}

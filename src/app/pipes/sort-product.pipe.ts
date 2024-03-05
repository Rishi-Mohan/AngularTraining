import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sortProduct',
  standalone: true
})
export class SortProductPipe implements PipeTransform {

  // by default it is check for id and then sort
  transform(productArray : Product[], sortBy:string = 'name'): Product[] {
    if(productArray.length < 0 ) return productArray;
    switch(sortBy){
      case "name":
        productArray.sort((p1, p2)=>{
          // here both strings are not equal and not undefined
          if(p1.name != undefined && p2.name != undefined){
            if(p1.name > p2.name)
             return 1;
            else if(p1.name < p2.name) return -1;
          }
          return 0;
        });
        break;
      case "price":
        // if(productArray.length < 0 ) return productArray;
        // productArray.sort((p1,p2)=>{ 
        //   if(p1.price != undefined && p2.price != undefined){
        //   return (p1.price - p2.price);}
        // });
        break;
      case "id": break;
      default: ;
    }
    return productArray;
  }

}

// challenge : searching should only works when we hit the enter key.
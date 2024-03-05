import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PowerPipe } from './pipes/power.pipe';
import { ConcatePipe } from './pipes/concate.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { Product } from './model/product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,PowerPipe, ConcatePipe,SortProductPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'check4';
  userName:string = "";
  addName(){
    console.log(this.userName);
  }
  clearName(){
    this.userName = "";
  }
 
 
  newProduct:Product = new Product();
  products:Product[]=[];

 
  constructor(){
    this.products.push(new Product(3,"D",23000.0));
    this.products.push(new Product(2,"C",10000.0));
    this.products.push(new Product(4,"B",23000.0));
    this.products.push(new Product(1,"A",10000.0));
    
  } 

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-basics',
    imports: [CommonModule],
    templateUrl: './basics.component.html',
    styleUrl: './basics.component.css'
})
export class BasicsComponent {
  // Angular
  getData(val:string){
    console.log(val);
  }
  
  // Get Input Box Value and Display
  displayVal = '';
  getValue(val:string){
    console.log(val);
    this.displayVal = val;
  }
  // Counter
  title:string = 'Counter';
  count:number = 0;
  Counter(type:string){
    type==="Increment"?this.count++:this.count--;
  }

  // Property Binding
  name:string = 'Angular';
  disable:boolean = true;
  getTrueFalse(bool:any){
    this.disable = bool;
    // console.log(this.disable);
  }

  // if-else 
  show:boolean = true;
  hide:boolean = false;

  // Loop
  colors = ['Green','Yellow','Orange'];
  userDetails = [
    {name:"Khushi",age:22,city:"Delhi"},
    {name:"John",age:45,city:"Mumbai"}
  ]

  // Multidimensional loop
  users = [
    {name:"Khushi",age:22,city:"Delhi",socialLinks:["Instagram","Twitter","Facebook"]},
    {name:"John",age:45,city:"Mumbai",socialLinks:["Instagram","Twitter","Facebook"]},
    {name:"Jack",age:30,city:"Delhi",socialLinks:["Instagram","Twitter","Facebook"]},
    {name:"Aish",age:28,city:"Mumbai",socialLinks:["Instagram","Twitter","Facebook"]}
  ]

  // Style binding
  color = "green";
  updateColor(){
    this.color = "red";
  }

  // Toggle element
  display = true;
  toggleFunc(){
    this.display =! this.display;
  }

  // Template Reference Variable 
  getTemplateData(item:any){
    console.log(item);
  }
}  
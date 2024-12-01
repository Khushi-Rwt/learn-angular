import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-form',
    imports: [CommonModule, FormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {
  title:string = "Basic form";
  userData:any = {};
  getData(data:NgForm){
    console.log(data);
    this.userData = data;
  }
} 
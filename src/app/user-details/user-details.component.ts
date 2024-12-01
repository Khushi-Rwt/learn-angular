import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-details',
    imports: [CommonModule],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  title = "Reusable Components";
  @Input() user:{name:string,age:number,city:string}={name:'',age:0 ,city:''};
  ngOnInit(): void {
    
  }
} 
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  constructor(){}
  // Send data parent to child component
  // @ Input() item=0;

  // Send data child to parent component
  @ Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
    
  }
}    
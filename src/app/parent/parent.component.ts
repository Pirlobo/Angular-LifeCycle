import { Component, DoCheck, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;
  firstName = "";
  data = {counter : 0};

  constructor() {
    console.log("Parent Constructor called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit - component is initialized");
  }

  increment() {
    // this.data.counter++;
    this.data = {counter: this.data.counter + 1};
  }

  // called when bounded property changes
  ngOnChanges() {
    console.log("Parent Onchanges");
  }

  // called when state changes, and right after ngOnInit
  ngDoCheck() {
    console.log("Parent DoCheck " + this.firstName);
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}

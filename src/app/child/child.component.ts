import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  counter = 0;
  interval: any;

  @Input()
  firstName:string = '';

  @Input() data : any;

  @ContentChild('parentContent', {static: true}) parentContent: any;
  @ViewChild('childContent', {static: true}) childContent: any;

  constructor() {
    console.log('Child Constructor called');
  }

  ngOnInit(): void {
    console.log('Child OnInit - component is initialized');
    console.log('init - ' + this.parentContent);
    console.log('init - ' + this.childContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  // called before the component is destroyed
  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log('Child OnDestroy - component is destroyed');
  }

  // when ngOnChanges is called, then ngDocheck is also called.
  // then you should avoid using both ngOnchanges and onDoCheck in the same component to avoid infinite loop
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child Onchanges');
    console.log('onChanges - ' + this.parentContent);
    console.log('onChanges - ' + this.childContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck');
    console.log('doCheck - ' + this.parentContent);
    console.log('doCheck - ' + this.childContent);
  }

  // we can only access parentContent (the component) after it's initialized
  ngAfterContentInit() {
    console.log('Child After Content Init');
    console.log('AfterContentInit - ' + this.parentContent);
    console.log('AfterContentInit - ' + this.childContent);
  }
  // called after ngAfterContentInit, and called after every subsequent ngDocheck (if ngDoChecked is called)
  ngAfterContentChecked() {
    console.log('Child After Content checked');
    console.log('AfterContentChecked - ' + this.childContent);
  }

  // called after first ngAfterContentChecked
  ngAfterViewInit() {
    console.log('Child After View Init');
    console.log('AfterViewInit - ' + this.childContent.textContent);
  }

  // called after ngAfterViewInit and after every subsequent ngAfterContentChecked
  ngAfterViewChecked() {
    console.log('Child After View checked'); 
  }
}

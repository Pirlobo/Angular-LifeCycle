import { Component, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren, AfterContentInit, ContentChild, ContentChildren } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit, AfterContentInit{

  @ViewChild(MessageComponent) firstMessageComponent: MessageComponent;
  @ViewChildren(MessageComponent) allMessageComponent: QueryList<MessageComponent>;
  @ContentChild(MessageComponent) firstProjectedMessageComponent: MessageComponent;
  @ContentChildren(MessageComponent) allProjectedMessageComponent: QueryList<MessageComponent>;

  messages : string[] = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
  ]

  constructor() { }

  ngOnInit(): void {
      
  }


  ngAfterViewInit(): void {
    // this.firstMessageComponent.message = "Chaged By ViewChild";
    this.allMessageComponent.toArray().forEach(messageComponent => {
      messageComponent.message = "Chaged By ViewChild";
    })
  }

  ngAfterContentInit(): void {
      this.firstProjectedMessageComponent.message = "First Projected Message"
  }

}

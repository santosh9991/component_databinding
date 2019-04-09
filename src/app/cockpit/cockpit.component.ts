import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //add event emiters to listn to the events. It is a generic type and 
  //<> symbol denotes the generic type. in b/w these we define the type of event data we are going to emit.
  //calling event emiter will create an object which creates a new event emitor
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    console.log(this.newServerName)
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
}

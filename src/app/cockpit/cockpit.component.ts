import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  serverName : '';
  serverContent : '';
  constructor() { }

  ngOnInit() {
  }
  

  onCreateServer (){
    this.serverCreated.emit({
      serverName: this.serverName, 
     serverContent: this.serverContent
    });
   }

    onCreateBlueprint(){
      this.blueprintCreated.emit({
        serverName: this.serverName,
        serverContent: this.serverContent
      });
   }

}

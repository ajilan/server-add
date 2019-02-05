import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //serverName : '';
  serverContent : '';
  constructor() { }

  ngOnInit() {
  }
  

  onCreateServer (nameInput: HTMLInputElement){
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
     serverContent: this.serverContent
    });
   }

    onCreateBlueprint(nameInput: HTMLInputElement){
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        //serverName: this.serverName,
        serverContent: this.serverContent
      });
   }

}

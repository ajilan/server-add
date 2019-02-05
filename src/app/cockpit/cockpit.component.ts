import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //serverName : '';
  //serverContent : '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;
  constructor() { }

  ngOnInit() {
  }
  

  onCreateServer (nameInput: HTMLInputElement){
   // console.log(this.serverContentInput);
   // console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value, 
     serverContent: this.serverContentInput.nativeElement.value
    });
   }

    onCreateBlueprint(nameInput: HTMLInputElement){
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        //serverName: this.serverName,
        serverContent : this.serverContentInput.nativeElement.value
        // serverContent: this.serverContent
      });
   }

}

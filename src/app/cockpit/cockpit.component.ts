import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName : '';
  serverContent : '';
  constructor() { }

  ngOnInit() {
  }
  onCreateServer (){
    this.serverElements.push({
      type : 'server',
      name : this.serverName ,
      content : this.serverContent
    });
  }

    onCreateBlueprint(){
      this.serverElements.push({
        type : 'blueprint',
      name: this.serverName,
      content: this.serverContent
      });
  }

}

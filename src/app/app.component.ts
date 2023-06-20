import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AnnuaireAngular';
  presentText!: String;

  ngOnInit(): void {
    this.presentText = "Ceci est un test d'utilisation";
  }
}

import { Component, Input, OnInit} from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})

export class IdentityCardComponent implements OnInit {

  @Input() contactType!: ContactModel;
  
  ngOnInit(): void {
    if (!this.contactType.imageInfo){
      this.contactType.imageInfo = "/assets/img/no-pic.jpg"
    }
  } 

  title = 'AnnuaireAngular';
}

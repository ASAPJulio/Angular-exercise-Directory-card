import { Component, OnInit} from '@angular/core';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit{
  
  constructor(private tmpDetailService: ContactService) {}

  ngOnInit(): void {
    this.tmpDetailService.getDetails(2);
  }
};

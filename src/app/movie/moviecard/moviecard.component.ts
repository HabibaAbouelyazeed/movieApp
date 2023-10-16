import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {
  faHeart = faHeart;
  environment = environment;
@Input() movie: any;
constructor(){}
ngOnInit(): void {
  
}
}

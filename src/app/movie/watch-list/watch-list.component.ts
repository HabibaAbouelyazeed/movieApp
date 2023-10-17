import { Component } from '@angular/core';
import {faStar, faHeart} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  faStar = faStar;
  faHeart = faHeart;
}

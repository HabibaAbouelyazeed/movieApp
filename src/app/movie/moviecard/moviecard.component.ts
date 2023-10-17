import { Component, Input, OnInit, } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent implements OnInit {
  constructor(private router: Router,){}
    
  faHeart = faHeart;
  environment = environment;
  @Input() movie: any;
  ngOnInit(): void {}

  sendIdToDetails(id: number) {
    console.log(id);
    this.router.navigate(['details', id])

  }
}


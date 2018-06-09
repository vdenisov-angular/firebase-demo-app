import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public navLinks: Object[] = [
    { label: 'Home', path: '/' },
    { label: 'Todos', path: '/todos' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  openHomePage() {
    // this.router.navigate(['/']);
    this.router.navigate( ['/'], {relativeTo: this.route} );
  }

  openTodosPage() {
    // this.router.navigate(['/todos']);
    this.router.navigate( ['/todos'], {relativeTo: this.route} );
  }

}

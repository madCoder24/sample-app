import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { logger } from './logger/loggerConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void {
    console.log(logger);
    logger.debug('testing logger');
  }
}

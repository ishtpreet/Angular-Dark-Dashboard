import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mydash',
  templateUrl: './mydash.component.html',
  styleUrls: ['./mydash.component.css']
})
export class MydashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'EC2 Over-Utilised', cols: 12, rows: 1 },
          { title: 'EC2 Under-Utilised', cols: 12, rows: 1 },
          { title: 'Cloudwatch Alarm', cols: 12, rows: 1 },
          { title: 'Elasticsearch Health', cols: 12, rows: 1 }
        ];
      }

      return [
        { title: 'EC2 Over-Utilised',  cols: 3, rows: 1 },
        { title: 'EC2 Under-Utilised',  cols: 3, rows: 1 },
        { title: 'Cloudwatch Alarm',  cols: 3, rows: 1 },
        { title: 'Elasticsearch Health', cols: 3, rows: 1 }
      ];
    })
  );
  // AWS COST
  awscost = {today: 1700, week: 12000, month: 51248};


  // Machine ID and corrensponding costs
  contents = [
    {
    mid: '09ac57aa12f25f9d5',
    usage: '80%'
    },
    {
      mid: '09ac57aa12f25f9d5',
      usage: '65%'
      },
      {
        mid: '09ac57aa12f25f9d5',
        usage: '50%'
      },
      {
        mid: '09ac57aa12f25f9d5',
        usage: '20%'
      },
      {
        mid: '09ac57aa12f25f9d5',
        usage: '50%'
      } ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}

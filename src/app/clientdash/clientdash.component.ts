import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-clientdash',
  templateUrl: './clientdash.component.html',
  styleUrls: ['./clientdash.component.css']
})
export class ClientdashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Client 1', cols: 12, rows: 1 },
          { title: 'Client 2', cols: 12, rows: 1 },
          { title: 'Client 3', cols: 12, rows: 1 },
          { title: 'Client 4', cols: 12, rows: 1 }
        ];
      }

      return [
        { title: 'Client 1', cols: 3, rows: 1 },
        { title: 'Client 2', cols: 3, rows: 1 },
        { title: 'Client 3', cols: 3, rows: 1 },
        { title: 'Client 4', cols: 3, rows: 1 }
      ];
    })
  );
  // Parameters of services running in Client Space
  contents = [
    {
    name: 'Data Quality Index',
    detail: '70%'
    },
    {
      name: 'JouleBox Running On',
      detail: '1237'
      },
      {
        name: 'Critical Log Entries',
        detail: '70'
      },
      {
        name: 'Sensors Out of Calibration',
        detail: '70'
      },
      {
        name: 'Successful Commands',
        detail: '97/113'
      } ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}

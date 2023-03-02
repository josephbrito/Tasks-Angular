import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  isDetail: boolean = false;

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const verify = Number(routeParam.get('id'));

    if (verify) {
      this.isDetail = true;
    } else {
      this.isDetail = false;
    }
  }
}

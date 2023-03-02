import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/task';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  task?: ITask;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const verify = Number(routeParam.get('id'));

    this.task = this.taskService.getOneTask(verify);
  }
}

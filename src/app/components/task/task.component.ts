import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TasksService } from 'src/app/tasks.service';
import { ITask } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  items: ITask[] = [];

  taskCheckout = this.formBuilder.group({
    name: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private tasksService: TasksService
  ) {
    this.items = this.tasksService.getTaskStorage();
  }

  onAddTask() {
    if (!this.taskCheckout.value.name) return;

    this.tasksService.addTask({
      id: this.items.length + 1,
      name: this.taskCheckout.value!.name,
      completed: false,
    });

    this.tasksService.setTaskStorage();

    this.taskCheckout.reset();
  }

  onDeleteTask(id: number) {
    this.items = this.tasksService.deleteTask(id);
    this.tasksService.setTaskStorage();
    return this.items;
  }

  onToggleCompletedTask(id: number) {
    this.items = this.tasksService.toggleCompleteTask(id);
    this.tasksService.setTaskStorage();
  }
}

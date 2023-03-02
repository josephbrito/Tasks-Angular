import { Injectable } from '@angular/core';
import { ITask } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  items: ITask[] = [];

  addTask(task: ITask) {
    this.items.push(task);
  }

  deleteTask(id: number) {
    this.items = this.items.filter((task) => task.id !== id);
    return this.items;
  }

  toggleCompleteTask(id: number) {
    const newItems = this.items.map((task) => {
      if (id == task.id) return { ...task, completed: !task.completed };
      return task;
    });

    this.items = newItems;

    return this.items;
  }

  getOneTask(id: number) {
    return this.items.find((task) => task.id == id);
  }

  setTaskStorage() {
    const data = JSON.stringify(this.items);
    localStorage.setItem('TASKS', data);
  }

  getTaskStorage() {
    const isData = localStorage.getItem('TASKS');
    if (!isData) {
      this.items = [];
      return this.items;
    }

    const data = JSON.parse(isData);
    this.items = data;
    return this.items;
  }

  constructor() {}
}

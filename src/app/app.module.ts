import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgIconsModule } from '@ng-icons/core';
import { heroTrash } from '@ng-icons/heroicons/outline';
import { heroArrowRightCircle } from '@ng-icons/heroicons/outline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TasksComponent },
      { path: 'task/:id', component: TasksComponent },
    ]),
    NgIconsModule.withIcons({ heroTrash, heroArrowRightCircle }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

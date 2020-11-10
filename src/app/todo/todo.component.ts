import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [
    {
      task: 'Feed Kimmy',
      completed: true,
    },
    {
      task: 'Drink chocolate milk',
      completed: false,
    },
    {
      task: 'Do homework',
      completed: true,
    },
    {
      task: 'Make dinner',
      completed: false,
    },
  ];


  taskFilterTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask = (form: NgForm): void => {
    console.log(form)
    let newTodo: Todo = {
      task: form.value.newTask,
      completed: false
    }
    this.todos.push(newTodo);
    form.reset();
  }

  todoCompleted = (type: string, index: number): void => {
    this.todos.splice(index, 1)
  };

  completeTodo = (type: boolean, index: number): void => {
    this.todos[index].completed === true;
  };

  filterTasks = (): Todo[] => {
    if (!this.taskFilterTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTaskName = todo.task.toLowerCase().trim();
        return currentTaskName.includes(this.taskFilterTerm.toLowerCase().trim())
      })
    }
  }

  setTaskFilterTerm = (form: NgForm): void => {
    this.taskFilterTerm = form.value.filterTerm;
  };

}

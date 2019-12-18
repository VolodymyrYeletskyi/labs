import { Component } from '@angular/core';
import { BookService } from './book.service';
import {Book } from './book';
import {NgForm} from '@angular/forms';

     
@Component({
    selector: 'addbook',
    template: `	<p>Add new book</p><div>
					<form #myForm = "ngForm" (ngSubmit) = "onSubmit(myForm)">
                    <div class="form-group">
                        <label>ID</label>
                        <input class="form-control" name="id" [(ngModel)]="id" required/>
                    </div>
                    <div class="form-group">
                        <label>Название книги</label>
                        <input type = "text" class="form-control" name="name" [(ngModel)]="name" required pattern = "[A-Z]+.*"/>
                    </div>
                    <div class="form-group">
                        <label>Автор</label>
                        <input class="form-control" name="author" [(ngModel)]="author" required/>
                    </div>
					<div class="form-group">
                        <label>Год выпуска</label>
                        <input class="form-control" name="year" [(ngModel)]="year"required />
                    </div>
                    <div class="form-group">
                        <input type = "submit" [disabled] = "myForm.invalid" value = "Добавить" />
                    </div>
              
			  </form>
					`
						
})
export class AddBook { 
    id:String;
	name:String;
	author:String;
	year:String;

	 	
	constructor(private bookService: BookService) {}
	
	onSubmit(form:NgForm): void {//создание книги
		this.bookService.addBook([form.value.id, form.value.name, form.value.author, form.value.year]);	
		console.log(form);
	}			
}
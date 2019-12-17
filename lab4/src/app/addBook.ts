import { Component } from '@angular/core';
import { BookService } from './book.service';
import {Book } from './book';

     
@Component({
    selector: 'addbook',
    template: `	<p>Add new book</p>
						<input type = "text" [(ngModel)] = "id" placeholder = "book id" />
						<input type = "text" [(ngModel)] = "name" placeholder = "book name" />
						<input type = "text" [(ngModel)] = "author" placeholder = "book author" />
						<input type = "text" [(ngModel)] = "year" placeholder = "book year" />
						<button (click) = "addBook()">Add this book</button>
					`
						
})
export class AddBook { 
    id:String;
	name:String;
	author:String;
	year:String;

	 	
	constructor(private bookService: BookService) {}
	
	addBook(): void {//создание книги
		this.bookService.addBook([this.id, this.name, this.author, this.year]);		
	}			
}
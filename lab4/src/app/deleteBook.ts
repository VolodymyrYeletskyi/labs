import { Component } from '@angular/core';
import { BookService } from './book.service';

     
@Component({
    selector: 'delete',
    template: `<p>Delete chosen book</p>
						<input type = "text" [(ngModel)] = "id" placeholder = "book id" />
						<input type = "text" [(ngModel)] = "name" placeholder = "book name" />
						<input type = "text" [(ngModel)] = "author" placeholder = "book author" />
						<input type = "text" [(ngModel)] = "year" placeholder = "book year" />
						<button (click) = "deleteBook()">Delete this book</button>`
						
})
export class DeleteBook { 
    id:String;
	name:String;
	author:String;
	year:String;

	 	
	constructor(private bookService: BookService) {}
	
	deleteBook(): void {//удаление книги
		this.bookService.deleteBook([this.id, this.name, this.author, this.year]);		
	}
	

		
}
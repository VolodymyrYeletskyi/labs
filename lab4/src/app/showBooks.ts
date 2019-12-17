import { Component } from '@angular/core';
import { BookService } from './book.service';
import {Book } from './book';

 //список всех книг    
@Component({
    selector: 'showbook',
    template: `	<p>LIST OF BOOKS</p>
					<table>
						<tr *ngFor = "let book of BookList">
							<td> <book [id] = "book[0]" [name] = "book[1]" [author] = "book[2]" [year] = "book[3]"></book></td>
						</tr>
					</table>
					 
					<router-outlet></router-outlet>
					`
						
})
export class ShowBooks { 
    
	BookList:String[][];
	
	constructor(private bookService: BookService) {}
	
	ngOnInit(){
        this.BookList = this.bookService.getBooks();
    }
		
}
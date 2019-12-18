import { Component } from '@angular/core';
import { BookService } from './book.service';
import {Book } from './book';
import { ActivatedRoute} from '@angular/router';

     
@Component({
    selector: 'find',
    template: `	<p>Your book is:</p>
					<table>
						<tr *ngFor = "let book of BookList">
							<td *ngIf = "book[0] == id"> <book [id] = "book[0]" [name] = "book[1]" [author] = "book[2]" [year] = "book[3]"></book></td>
						</tr>
					</table>
					`
						
})
export class ShowConcreteBook { 
    BookList:String[][];//список книг
	id: String;
   
	
	constructor(private bookService: BookService, private activateRoute: ActivatedRoute) {
		this.id = activateRoute.snapshot.params['id'];
		
	}
	
	ngOnInit(){
        this.BookList = this.bookService.getBooks();
    }
	

		
}
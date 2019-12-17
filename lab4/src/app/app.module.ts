import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Library }   from './library';
import { ShowBooks }   from './showBooks';
import {Book } from './book';
import {AddBook } from './addBook';
import {DeleteBook } from './deleteBook';
import { BookService } from './book.service';
import {ShowConcreteBook } from './showConcreteBook';

import {Routes, RouterModule} from '@angular/router';

const bookRoutes: Routes = [
    { path: 'add', component: AddBook },
    { path: 'delete', component: DeleteBook}
];

const appRoutes: Routes =[
    { path: 'books', component: ShowBooks, children: bookRoutes },
	{ path: 'books', component: ShowBooks, children: bookRoutes },
	{ path: 'books/:id', component: ShowConcreteBook}
];

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
    declarations: [ Library, ShowBooks, Book, AddBook, ShowConcreteBook, DeleteBook ],
	providers: [BookService],
    bootstrap:    [ Library ]
})
export class AppModule { }

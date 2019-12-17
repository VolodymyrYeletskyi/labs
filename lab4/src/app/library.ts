import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import { ActivatedRoute} from '@angular/router';

 //бибилиотека    
@Component({
    selector: 'lib',
    template: `	<p>LIBRARY</p>
					<nav>
						<input type = "text" [(ngModel)] = "id" placeholder = "Enter needed id" />
						<a [routerLink] = "['books', id]">Find a book</a> |
						<a routerLink = "/books">Show all books</a> |
                        <a routerLink="/books/add">Add a new book</a> |
                        <a routerLink="/books/delete">Delete a book</a> |
                    </nav>
					
					 <router-outlet></router-outlet>`
						
						
})
export class Library { 
   private id:String;
   private subscription: Subscription;
   
   constructor(private activateRoute: ActivatedRoute){
         
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
}
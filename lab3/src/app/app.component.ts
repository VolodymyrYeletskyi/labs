import { Component, ViewChild } from '@angular/core';
import { UserService} from './user.service';
import { CountService} from './count.service';
import { ActiveUsers } from './activeUsers';
import {InactiveUsers } from './inactiveUsers';

     
@Component({
    selector: 'my-app',
    template: `	
					<p>Create new user</p>
						<input type = "text" [(ngModel)] = "new_name" placeholder = "new username" />
						<input type = "text" [(ngModel)] = "new_state" placeholder = "active or inactive" />
						<button (click) = "createUser()">Create new user</button> 
					<p>Active users</p>
					<table>
							<tr *ngFor = "let user of activeUsers">
								<td><active [name] = "user"></active> </td>
							</tr>
						</table>
					<p>Inactive users</p>
					<table>
							<tr *ngFor = "let user of inactiveUsers">
								<td><inactive [name] = "user"></inactive> </td>
							</tr>
						</table>
						<p> Количество перемещений {{userService.getCount()}} </p>`
						
						
})
export class AppComponent { 
	new_name:String;
	new_state:String;
	activeUsers:String[] = [];
	inactiveUsers:String[] = [];

	 	
	constructor(private userService: UserService) {}
	
	createUser(): void {//создание нового пользователя
		this.userService.addUser([this.new_name, this.new_state]);		
	}	
	ngOnInit(){
		this.activeUsers = this.userService.getActiveUsers();
		this.inactiveUsers = this.userService.getInactiveUsers();
		console.log(this.activeUsers);
	}
	

		
}
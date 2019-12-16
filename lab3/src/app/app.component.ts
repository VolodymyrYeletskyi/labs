import { Component } from '@angular/core';
import { User } from './user';
import { UserService} from './user.service';
import { CountService} from './count.service';

     
@Component({
    selector: 'my-app',
    template: `	
					<p>Create new user</p>
						<input type = "text" [(ngModel)] = "new_name" placeholder = "new username />
						<input type = "text" [(ngModel)] = "new_state" placeholder = "active or inactive" />
						<button (click) = "createUser()">Create new user</button> 
					<p>Active users</p>
					<table>
							<tr *ngFor = "let user of activeUsers">
								<td><user [name] = "user[0]" [state] = "user[1]"></user> <button (click) = "changeState(user)">{{buttonName(user)}}</button> </td>
							</tr>
						</table>
					<p>Inactive users</p>
					<table>
							<tr *ngFor = "let user of inactiveUsers">
								<td><user [name] = "user[0]" [state] = "user[1]"></user> <button (click) = "changeState(user)">{{buttonName(user)}}</button> </td>
							</tr>
						</table>
						<p> Количество перемещений {{userService.getCount()}} </p>`,
						providers:[UserService, CountService]
						
})
export class AppComponent { 
    new_name:String;
	new_state:String;
	activeUsers:String[][];
	inactiveUsers:String[][];
	
	constructor(private userService: UserService) {}
	
	createUser(): void {//создание нового пользователя
		this.userService.addUser([this.new_name, this.new_state]);		
	}	
	ngOnInit(){
		this.activeUsers = this.userService.getActiveUsers();
		this.inactiveUsers = this.userService.getInactiveUsers();		
	}
	
	buttonName(user:String): String {//смена названия кнопки при перемещении пользователя
		if (user[1] == "active")
		{
			return "Set to inactive";
		}
		if (user[1] == "inactive")
		{
			return "Set to active";
		}
	}
	
	changeState(user:String[]): void {
		this.userService.changeList(user);//смена состояния пользователя
	}
		
}
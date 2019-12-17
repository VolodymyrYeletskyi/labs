import {Injectable} from '@angular/core';
import {CountService} from './count.service';

@Injectable()
export class UserService{//сервис для работы с пользователями
	private activeUsers:String[] = ["Vasya", "Petya"];//каждый пользователь представляет собой имя и состояние:active/inactive
	private inactiveUsers:String[] = ["Vova", "Semen"];
	
	constructor (private countService: CountService) {}
	
	getActiveUsers(): String[] {
		return this.activeUsers;
	}
	getInactiveUsers(): String[] {
		return this.inactiveUsers;
	}
	getCount(): number {
		return this.countService.getCount();
	}
	
	addUser(user:String[]): void {//добавление нового пользователя
		if (user[1] == "active")
		{
			this.activeUsers.push(user[0]);
		}
		if(user[1] == "inactive")
		{
			this.inactiveUsers.push(user[0]);
		}
	}
	
	changeList(state:String, name:String): void {//переход пользователя из активного в инактивный
		if (state == "active")
		{
			
			this.inactiveUsers.push(name);
			
			this.activeUsers[this.activeUsers.lastIndexOf(name)] = this.activeUsers[this.activeUsers.length - 1];
			this.activeUsers[this.activeUsers.length - 1] = name;
			this.activeUsers.pop();
			//console.log(this.activeUsers);
			this.countService.incrementCount();//увеличение счетчика перемещений
			return;
		}
		if(state == "inactive")
		{
			
			this.activeUsers.push(name);
			
			this.inactiveUsers[this.inactiveUsers.lastIndexOf(name)] = this.inactiveUsers[this.inactiveUsers.length - 1];
			this.inactiveUsers[this.inactiveUsers.length - 1] = name;
			this.inactiveUsers.pop();
			//console.log(this.inactiveUsers);
			this.countService.incrementCount();//увеличение счетчика перемещений

			return;
		}
	}
}
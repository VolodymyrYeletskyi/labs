import {Injectable} from '@angular/core';
import {CountService} from './count.service';

@Injectable()
export class UserService{//сервис для работы с пользователями
	private activeUsers:String[][] = [["Vasya", "active"], ["Petya", "active"]];//каждый пользователь представляет собой имя и состояние:active/inactive
	private inactiveUsers:String[][] = [["Vova", "inactive"], ["Semen", "inactive"]];
	
	constructor (private countService: CountService) {}
	
	getActiveUsers(): String[][] {
		return this.activeUsers;
	}
	getInactiveUsers(): String[][] {
		return this.inactiveUsers;
	}
	getCount(): number {
		return this.countService.getCount();
	}
	
	addUser(user:String[]): void {//добавление нового пользователя
		if (user[1] == "active")
		{
			this.activeUsers.push(user);
		}
		if(user[1] == "inactive")
		{
			this.inactiveUsers.push(user);
		}
	}
	
	changeList(user:String[]): void {//переход пользователя из активного в инактивный
		if (user[1] == "active")
		{
			user[1] = "inactive";
			this.inactiveUsers.push(user);
			
			this.activeUsers[this.activeUsers.lastIndexOf(user)] = this.activeUsers[this.activeUsers.length - 1];
			this.activeUsers[this.activeUsers.length - 1] = user;
			this.activeUsers.pop();
			
			this.countService.incrementCount();//увеличение счетчика перемещений

			return;
		}
		if(user[1] == "inactive")
		{
			user[1] = "active";
			this.activeUsers.push(user);
			
			this.inactiveUsers[this.inactiveUsers.lastIndexOf(user)] = this.inactiveUsers[this.inactiveUsers.length - 1];
			this.inactiveUsers[this.inactiveUsers.length - 1] = user;
			this.inactiveUsers.pop();
			
			this.countService.incrementCount();//увеличение счетчика перемещений

			return;
		}
	}
}
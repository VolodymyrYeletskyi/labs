import { Component, Input } from '@angular/core';
import { UserService} from './user.service';
import { CountService} from './count.service';

     
@Component({
    selector: 'active',
    template: `	
					{{name}}
						<button (click) = "changeState()">Set to inactive</button>`
						
						
})
export class ActiveUsers { 
   @Input()name:String;
   activeUsers:String[] = [];
	
	constructor(private userService: UserService) {}
	
	ngOnInit(){
		this.activeUsers = this.userService.getActiveUsers();		
	}
	
	
	changeState(): void {
		console.log(1);
		this.userService.changeList("active", this.name);//смена состояния пользователя
	}
		
}
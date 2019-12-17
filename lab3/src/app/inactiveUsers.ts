import { Component, Input } from '@angular/core';
import { UserService} from './user.service';
import { CountService} from './count.service';

     
@Component({
    selector: 'inactive',
    template: `	
					{{name}}
						<button (click) = "changeState()">Set to active</button>`
						
						
})
export class InactiveUsers { 
   @Input()name:String;
   inactiveUsers:String[] = [];
	
	constructor(private userService: UserService) {}
		
	ngOnInit(){
		this.inactiveUsers = this.userService.getActiveUsers();		
	}
	
	
	changeState(): void {
		
		this.userService.changeList("inactive", this.name);//смена состояния пользователя
	}
		
}
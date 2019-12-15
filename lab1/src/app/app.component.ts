import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `	
				<input type = "text" [(ngModel)] = "t"/>
					<button [disabled] = "isActive()" (click) = "Empty()">Enter</button>
					
					<p> {{printText()}}</p>`
})
export class AppComponent { 
    t= "";
	r = "";
	
	isActive(): boolean {//button is active when we have a text in input line, else button is not active
		if (this.t != "")
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	Empty(): void {//empty input line when button is pushed
		this.r += this.t;
		this.t = "";
	}	
	printText(): String {//print input on paragraph
		if (this.t == "")
		{
			return this.r;
		}
		else
		{
			return this.r + this.t;
		}
	}
}
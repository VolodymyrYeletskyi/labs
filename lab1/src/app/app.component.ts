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
	
	isActive(): boolean {
		if (this.t != "")
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	Empty(): void {
		this.r += this.t;
		this.t = "";
	}	
	printText(): String {
		//this.r = this.t;
		if (this.t == "")
		{
			return this.r /*+ '!'*/;
		}
		else
		{
			return this.r + this.t /*+ '?'*/;
		}
		//return this.r;
	}
}
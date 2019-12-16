import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `	
				<input type = "text" [(ngModel)] = "input_text"/>
					<button [disabled] = "isActive()" (click) = "Empty()">Enter</button>
					
					<p> {{result_text}}</p>`
})
export class AppComponent { 
    input_text= "";
	result_text = "";
	
	isActive(): boolean {//button is active when we have a text in input line, else button is not active
		return this.input_text == "";
	}
	Empty(): void {//empty input line when button is pushed
		this.result_text += this.input_text;
		this.input_text = "";
	}	
}
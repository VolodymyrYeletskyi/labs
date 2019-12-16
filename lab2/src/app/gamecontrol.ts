import { Component } from '@angular/core';
import { Even } from './even';
import { Odd } from './odd';
     
@Component({
    selector: 'my-app',
    template: `	
				<template #numberContainer></template>
					<button (click) = "StartGame()">Start Game</button>
						<button (click) = "StopGame()">Stop Game</button>
							<p>{{line}}</p>
					
					`
})
export class GameControl { 
    counter: number = 0;
	line = "";
	inter:number;
	
	StartGame(): void {//start create components
		this.inter = setInterval(() => { this.counter ++; if (this.counter % 2 != 0)
		{
			//if number is odd, create Odd component
			let odd = new Odd();
			this.line = odd.name;
		}
		else
		{
			//if number is even, create Even component
			let even = new Even();
			this.line = even.name;
		} }	, 1000);
		
	}
	StopGame(): void {//stop create components
		clearInterval(this.inter);
		this.line = "Game over";
	}
		
}
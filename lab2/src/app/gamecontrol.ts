import { Component, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, TemplateRef, ComponentRef, ChangeDetectorRef, EventEmitter, ReflectiveInjector,  ElementRef} from '@angular/core';
import { Even } from './even';
import { Odd } from './odd';
     
@Component({
    selector: 'my-app',
    template: `	
				<template #numberContainer></template>
					<button (click) = "StartG()">Start Game</button>
						<button (click) = "StopG()">Stop Game</button>
							<p>{{line}}</p>
					
					`
})
export class GameControl { 
    counter: number = 0;
	line = "";
	inter:number;
	//self:any;
	//var self = this;
	//@ViewChild("numberContainer", {read: ViewContainerRef, static:false}) container:ViewContainerRef;
	//ComponentRef: ComponentRef<any>;
	
	
	
	StartG(): void {
		//this.counter = 0;
		//var _this = this;
		//this.container.clear();
		this.inter = setInterval(() => { this.counter ++; if (this.counter % 2 != 0)
		{
			//const factory: ComponentFactory<Odd> = this.resolver.resolveComponentFactory(Odd);
			let odd = new Odd();
			this.line = odd.name;
		}
		else
		{
			let even = new Even();
			this.line = even.name;
			//const factory: ComponentFactory<Even> = this.resolver.resolveComponentFactory(Even);
		} }	, 1000);
		
	}
	StopG(): void {
		clearInterval(this.inter);
		this.line = "Game over";
	}
	
	/*Func(i:number): void {
		i = i++;
		console.log(i);
		if (i % 2 != 0)
		{
			//const factory: ComponentFactory<Odd> = this.resolver.resolveComponentFactory(Odd);
			let odd = new Odd();
			this.line = odd.name;
			console.log(this.line, this.counter);
		}
		else
		{
			let even = new Even();
			this.line = even.name;
			console.log(even.name);
			//const factory: ComponentFactory<Even> = this.resolver.resolveComponentFactory(Even);
		}	
	}*/
		
}
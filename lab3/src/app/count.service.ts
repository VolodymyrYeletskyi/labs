export class CountService{//сервис для подсчета количества перемещений
	private count:number = 0;
	
	incrementCount(): void {
		this.count++;
		console.log(this.count);
	}
	getCount(): number {
		return this.count;
	}
}
export class BookService{//сервис для работы с книгами
	private books:String[][] = [["1", "book1", "author1", "1999"], ["2", "book2", "author2", "1999"]];//книги
		
	getBooks(): String[][] {
		return this.books;
	}

	
	
	addBook(book:String[]): void {//добавление новой книги
		this.books.push(book);
	}
	deleteBook(book:String[]): void {//удаление книги
		if (this.books.lastIndexOf(book) >= 0)
		{
			this.books[this.books.lastIndexOf(book)] = this.books[this.books.length - 1];
			this.books[this.books.length - 1] = book;
			this.books.pop();
		}
	}
}
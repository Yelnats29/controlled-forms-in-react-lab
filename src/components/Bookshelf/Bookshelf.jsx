import { useState } from "react";

const Bookshelf = () => {
const [books, setBooks] = useState([
    {title: 'Fourth Wing', author: 'Rebecca Yarros'},
    {title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis'},
]
);

const [newBook, setNewBook] = useState(
    {title: '', author: ''},
);

const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Copy the current list of books and add the new book
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setNewBook({title: '', author: ''});
};

function bookCards({ books }) {
    return (
      <div>
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    );
  }


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        />
                        <br></br>
                        <label htmlFor="author">Author: </label>
                        <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        />
                        <br></br>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="bookCardsDiv">{bookCards({ books })}</div>
            </div>
        </>
    );
};

export default Bookshelf;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((json) => setBooks(json))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="main-container">
      <h1 className="main-title">Seuss Treasury</h1>
      <p className="sub-title">Select a book to learn more.</p>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book">
            <Link to={`/book/${book.id}`}>
              <img className="book-img" src={book.image} alt={book.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books


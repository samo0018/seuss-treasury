import React from 'react'
import { useParams } from 'react-router-dom'

function BookDetails({ books }) {
  const { id } = useParams()
  const book = books.find((book) => book.id.toString() === id)

  if (!book) {
    return <div>Book not found.</div>
  }

  return (
      <div>
            <h1 className="main-title">Seuss Treasury</h1>
            <div className="book-details-container">
                  <img className="book-image" src={book.image} alt={book.title} />
                  <div className="book-info">
                        <h2 className="book-title">{book.title}</h2>
                        <p className="book-description">{book.description}</p>
                        <p className="book-publish-date">Year Published: {book.year_published}</p>
                  </div>
            </div>
      </div>
  )
}

export default BookDetails
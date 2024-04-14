    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchBooks(searchTerm);
        } else {
            searchResults.innerHTML = '<p>Please enter a book name.</p>';
        }
    });

// function to fetch and display results based on a query
    function searchBooks(query) {
        // constructing api url from Google Books API
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayBooks(data.items);
            })
            .catch(error => {
                // display error message if fetching data fails
                console.error('Error fetching data:', error);
                searchResults.innerHTML = '<p>An error occurred. Please try again later.</p>';
            });
    }

// function to display book information in search results
    function displayBooks(books) {
        if (books && books.length > 0) { // check to see if there are any books in the result
            searchResults.innerHTML = ''; // clear previous results
            // iterating through each book
            books.forEach(book => {
                // retrieving relevant information
                const title = book.volumeInfo.title;
                const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
                const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192?text=No+Image';
                const description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available';

                // generate HTML markup for each book and appending to seafch results
                const bookHTML = `
                    <div class="book">
                        <img src="${thumbnail}" alt="${title}" style="float: left; margin-right: 20px;">
                        <div>
                            <h3>${title}</h3>
                            <p><strong>Author(s):</strong> ${authors}</p>
                            <p>${description}</p>
                        </div>
                    </div>
                `;
                searchResults.innerHTML += bookHTML;
            });
        } else {
            searchResults.innerHTML = '<p>No books found.</p>';
        }
    }

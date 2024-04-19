html{
    width: 100%;
    height: 100%;
    background-color: #102C57;
    background-image: url("https://c1.wallpaperflare.com/preview/246/478/474/book-wall-bookcase-library-interior.jpg");
  }
  
  body{
    font-family: Arial, Helvetica, sans-serif;
    /* background-color: #815009; */
  }
  
  p{
    font-size: 16px;
    color: #FEFAF6; /* this deals with the words in the book results */
  }
  
  /* this is just the header of the site  */
  h1, h2 {
    font-size: 2.5rem;
    justify-content: center;
    text-align: center;
    margin: 0 0 2px;
    border: 3px solid #FEFAF6;
    display: inline-block;
    border-radius: 7px;
    padding: 2px;
    background-color: #102C57;
    font-family: "Brush Script MT", cursive, sans-serif;
  }
  /* change this to handle the color when you put the cursor over the header  */
  h1:hover{
    background-color: orange; 
  }
  
  /* this primarily deals with the name of the book  */
  h3{
    font-size: 1.5rem;
    justify-content: center;
    color: wheat;
    border: 3px solid #FEFAF6;
    border-radius: 6px;
    /* transition: visibility 0.3s; */
  }
  /* what will appear when the name of the book is hovered over  */
  h3:hover {
    background-color: orange; /* Blue-violet color with 50% opacity */
  }
  
  /* don't change this  */
  h3::before{
    content: attr(pre-text);
    transition: content 0.3s;
  }
  
  /* dont change this either */
  h3:hover::before {
    content: attr(hover-text);
  }
  
  /* where all the buttons are */
  nav{
    display: flex;
    margin-bottom: 2rem;
    border: 2px solid #FEFAF6;
    border-radius: 7px;
    padding: 2px;
    background-color: #EADBC8;
    height: 54px;
  }
  
  #search-container {
    display: flex;
    justify-content: center;
  }
  
  #search-results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-content: center;
  }
  
  #search-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    margin-right: 2px;
  }
  
  #search-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #102C57;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  #search-button:hover {
    background-color: orange;
  }
  
  
  .book {
    display: flex;
    grid-template-columns: auto 1fr; 
    grid-template-rows: auto auto; 
    gap: 10px; 
  
    background-color: #102C57;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  
  .book img {
    grid-row: 1 / span 2;
    width: 80px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .book-info {
    display: flex;
    flex-direction: column;
  }
  
  .book h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .book p {
    margin: 5px 0; 
  }
  
  .book.extended p{
    display: block;
  }
  
  .description.hidden {
    display: none;
  }
  
  
  ul{
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  
  li{
    margin-right: 10px;
    word-spacing: normal;
    border: 2px solid white;
    border-radius: 7px;
    padding: 5px;
    background-color: #EADBC8;
  }
  
  li a.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #102C57;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  li a.button:hover {
    background-color: orange;
  }
  
  form {
    display: flex;
    flex-direction: column;
    top: 10px;
    left: 10px;
    width: 350px;
    padding: 20px;
    background-color: #102C57;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #EADBC8;
  }
  label {
    display: flex;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 92%;
    padding: 10px;
    border: 2px solid #EADBC8;
    border-radius: 3px;
    color: black;
  }
  
  /* Style for the signup button */
  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #EADBC8;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: orange;
  }
  
    /* CSS for styling */
    #books-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .book1 { 
      width: 25%;
      margin-bottom: 20px;
      padding: 10px;
      border: 2px solid #FEFAF6;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      background-color: #102C57;
    }
  
    .book1 img {
      width: 80px;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  
    .book1-info{
      display: flex;
      flex-direction: column;
    }
  
    h4 {
      font-size: 1.5rem;
      justify-content: center; 
      color: wheat; 
      border: 3px solid #FEFAF6; 
      border-radius: 6px; 
    }
  
    .book1 h4 {
      margin-top: 0;
      font-size: 18px;
      font-weight: bold;
      cursor: default;
    }
  
    .book1 p {
      margin: 5px 0; 
    }
  
    a{
      color: #EADBC8;
    }
  
  h2 {
    width: 96%;
    margin-bottom: 10px;
    text-align: center;
    cursor: default;
  }
  
  p{
    line-height: 1.3;
    word-wrap: break-word;
  }

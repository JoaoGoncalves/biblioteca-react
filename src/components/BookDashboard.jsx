import BookList from "./BookList";
import data from '../data.js'
import { useState } from "react";

/* let arrayBooks = [
    {
        "id":0,
        "title":"Angular com Typescript",
        "author":"Yakov Fain",
        "alreadyRead":true,
        "imageUrl":"angular.jpg",
        "imageUrlGr":"angularGr.png",
        "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium."
     },
     {
        "id":1,
        "title":"Blockchain com JS",
        "author":"Bina Ramahurty",
        "alreadyRead":false,
        "imageUrl":"blockchain.jpg",
        "imageUrlGr":"blockchainGr.png",
        "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vitae inventore nostrum nobis! Quia, iure totam quaerat expedita laboriosam quo omnis culpa vero provident! Quis pariatur accusantium nesciunt recusandae praesentium."
     }
] */


export default function BookDashboard() {

  const [books, setBooks] = useState(data.books)

  const handleDelete = (id) => {
    console.log('livro para apagar: ', id);

    setBooks( books.filter( b => b.id !== id) );
  }


  return (
    <div>
        <BookList 
          books={books}  
          onDelete={handleDelete}
        />
    </div>
  )
}

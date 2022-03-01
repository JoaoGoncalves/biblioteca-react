import React, { useState } from 'react'

export default function BookForm(props) {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [alreadyRead, setAlreadyRead] = useState('');


    const handleSubmit = (e) => {

        let id = new Date().getTime();

        console.log(id);
        
        let newBook = {
            id,
            title,
            author,
            alreadyRead,
            imageUrl,
        }

        props.onFormSubmit(newBook);

        setTitle('');
        setAuthor('');
        setImageUrl('');
        setAlreadyRead(false);

        
        e.preventDefault();
    }

  return (
    <section className="acrescentar">
        <form id="acrescentarForm" action="" autoComplete='off'>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" value={title} onChange={ ({target:{value}})=>setTitle(value) }  />
            </div>
            <div>
                <label htmlFor="author">Autor</label>
                <input type="text" id="author" value={author} onChange={ (e)=>setAuthor(e.target.value)}  />
            </div>
            <div>
                <input type="checkbox" id="alreadyRead" checked={alreadyRead}  onChange={({target:{checked}}) => setAlreadyRead(checked)}/>
                <label htmlFor="alreadyRead">lido</label>
            </div>
            <div>
                <label htmlFor="imageUrl">Imagem</label>
                <input type="text" id="imageUrl" value={imageUrl} onChange={ (e)=>setImageUrl(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Acrescentar livro</button>
        </form>
    </section>
  )
}

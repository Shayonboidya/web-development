import React from 'react';

// load data

const getData = async()=>{
    const res = await fetch('/booksData.json');
    return res.json();
}


const Books = async() => {

    const books = await getData();

    return (
        <section className='container mx-auto my-60'>
            <div>
                <h3>Books data : {books.length} </h3>
            </div>
        </section>
    );
};

export default Books;
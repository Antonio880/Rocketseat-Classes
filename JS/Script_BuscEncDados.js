/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

booksbyCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Artificial",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade  Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

/*let totalCategories = booksbyCategory.length

console.log(totalCategories)

for( let category of booksbyCategory ){
    console.log('Total de livros da categoria ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = []

    for( let category of booksbyCategory ){
        for( let book of category.books ){
            if(authors.indexOf(book.author) == -1)
            authors.push(book.author)
        }
    }
    console.log("Total de autores ",authors.length)

}
countAuthors()*/

/*function boobksofAugustoCury(){
    let books = []

    for( let category of booksbyCategory ){
        for( let book of category.books ){
            if(books.author === 'Augusto Cury')
            books.push(book.title)
        }
    }
    console.log("Livros do autor ",books)
}
boobksofAugustoCury()*/

function boobksofAuthors(author){
    let books = []

    for( let category of booksbyCategory ){
        for( let book of category.books ){
            if(book.author === author)
            books.push(book.title)
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
boobksofAuthors("Stephen R. Covey")
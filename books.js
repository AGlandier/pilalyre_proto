const num_books = 100;

const titles = ['Misery', 'It*', 'It**', 'Night Shift', 'The Shining', 'Carrie', 'Et on tuera tous les affreux', 'En avant la zizique',
    "L'écume des jours", 'Le Hobbit', 'Les âmes croisées', "L'appel de Ctulhu", 'Les montagnes hallucinées']

const authors = ['Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', "Boris Vian",
"Boris Vian", "Boris Vian", "J.R.R. Tolkien", "Pierre Bottero", "H.P. Lovecraft", "H.P. Lovecraft"]

const getTitle = (index) => `${titles[index]}`
const getAuthor = (index) => `${authors[index]}`


// create a book
const createBook = (index) => ({title: getTitle(index), author: getAuthor(index)})
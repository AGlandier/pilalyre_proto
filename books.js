const titles = ['Misery', 'It*', 'It**', 'Night Shift', 'The Shining', 'Carrie', 'Et on tuera tous les affreux', 'En avant la zizique',
    "L'écume des jours", 'Le Hobbit', 'Les âmes croisées', "L'appel de Ctulhu", 'Les montagnes hallucinées', 'Eragon', 'A la recherche du temps perdu',
    'Les fleurs du mal', 'Le coma des mortels']

const authors = ['Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', 'Stephen King', "Boris Vian",
"Boris Vian", "Boris Vian", "J.R.R. Tolkien", "Pierre Bottero", "H.P. Lovecraft", "H.P. Lovecraft", 'Christopher Paolini', 'Marcel Proust', 'Charles Baudelaire',
'Maxime Chattam']

const alpha = ['k', 'k', 'k', 'k', 'k', 'k', 'v', 'v', 'v', 't', 'bo', 'l', 'l', 'pa', 'pr', 'ba', 'ch']

const getTitle = (index) => `${titles[index]}`
const getAuthor = (index) => `${authors[index]}`
const getAlpha = (index) => `${alpha[index]}`


// create a book
const createBook = (index) => ({title: getTitle(index), author: getAuthor(index), alpha: getAlpha(index)})

//compare for alphabetizing
export const compareAlpha = (book1, book2) => book1.alpha > book2.alpha

//add keys based on index
const addKeys = (val, key) => ({key: key, ...val})

const createArray = () => {
    var array = []

    for (let index = 0; index < titles.length; index++) {
        array.push(createBook(index))
    }
    return array
}

export const bookArray = createArray().map(addKeys)
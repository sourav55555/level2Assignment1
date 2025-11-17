type FormatValue<T> = (a: T) => T; 

const formatValue: FormatValue<string | number | boolean> = (a) => {
    if (typeof a === 'string') {
        return a.toUpperCase();
    } else if (typeof a === 'number') {
        return a*10
    } else if (typeof a === "boolean") {
        return !a; 
    } else {
        return "please pass a proper value";
    }
} 

// console.log(formatValue('helloaserf'));
// console.log(formatValue(5));
// console.log(formatValue(true));


interface Length<T> {
    (input: T): number | undefined
}

const getLength: Length<string | (number | string)[]> = (a) => {
    if (typeof a === "string") {
        return a.length;
    } else if (Array.isArray(a)) {
        return a.length
    }
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40, "s", "d"]));


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());


interface Data{
    title: string
    rating: number
}
interface FilterFunction {
    (data: Data[]): Data[]
}

const filterByRating: FilterFunction = (data) => {
    if (Array.isArray(data) && data.length > 0) {
        const filteredData = data.filter(item => item.rating >= 4 && item.rating <= 5)
        return filteredData
    } else {
        return []
    }
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
  { title: 'Book d', rating: 8 },
];

// console.log(filterByRating(books), books);


interface User{
    id: number | string;
    name: string;
    email: string;
    isActive: boolean
}

interface FilterUser{
    (users: User[]): User[]
}

const filterActiveUsers: FilterUser = (users) => {
    let filter: User[] = []
    users.forEach(item => {
        if (typeof item.isActive === 'boolean') {
            item.isActive && filter.push(item)
        }
    })
    return filter
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users), users);

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

type BookDetails = (book: Book) => void

const printBookDetails: BookDetails = (book) => {
    let bookData = ""
    const keyVal = Object.keys(book);
        
    (keyVal as (keyof Book)[] ).forEach((data,index) => {
    bookData += (`${data.toUpperCase()}: ${book[data]}${keyVal.length-1 === index? "" : ","} `)
    })

    console.log(bookData);
}
// const myBook: Book = {
//   title: 'The Great Gatsby 2',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook)

type ArrData = (string | number)[]

type ArrayFunction = (array1: ArrData, array2: ArrData) => ArrData;

const getUniqueValues: ArrayFunction = (array1, array2) => {

    let newArr: ArrData = [];
    array1.map(item => {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }

    })
    array2.forEach(data => {
        if (!array1.includes(data)) {
            newArr.push(data)
        }
    })
    return newArr
}

// const array1 = [1, 'b','c','d', 3, 4, 5];
// const array2 = [3, 4,'a', 'b', 5, 6, 7];
// console.log(getUniqueValues(array1, array2));


interface Product{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

type PriceCalc = (product: Product[]) => number

const calculateTotalPrice: PriceCalc = (product) => {

    const totalPrice = product.reduce((acc, item) => {
        let price = item.price * item.quantity
        if (item.discount && item.discount > 0) {
            acc = acc + (price - (price * (item.discount / 100)))
        } else {
            acc = acc + price
        }
        return acc
    }, 0)

    return totalPrice;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));

// const sum = (arr) => {
//     return arr.reduce((acc, item) => {
//         return acc = acc + item
//     },0)
    
// }
// console.log(sum([2,3,4]))
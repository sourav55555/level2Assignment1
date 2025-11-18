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



interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}

type BookDetails = (book: Book) => void

const printBookDetails: BookDetails = (book) => {

    let bookData = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
    console.log(bookData);

}



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
        if (!array1.includes(data) && !newArr.includes(data)) {
            newArr.push(data)
        }
    })
    return newArr
}




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

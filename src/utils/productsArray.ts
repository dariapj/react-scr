type ProductsProps = {
    id: number
    title: string
    desc: string
    type: string
capacity: string
price: number
image: string
}

const productsArray:ProductsProps[] = [
    {id:1, title:"iPhone 14 Pro",desc: "This is iPhone 14 Pro",type:"phone",capacity:"64Gb", price:600, image:"/images/pink.jpg"},
    {id:2, title:"iPhone 14",desc: "This is iPhone 14",type:"phone",capacity:"124Gb", price:800, image:"/images/white.jpg"},
    {id:3, title:"iPhone 13",desc: "This is iPhone 13",type:"phone",capacity:"72Gb", price:500, image:"/images/red.jpg"},
    {id:4, title:"iPhone 12",desc: "This is iPhone 12",type:"phone",capacity:"88Gb", price:400, image:"/images/green.jpg"},
    {id:5, title:"iPhone 10",desc: "This is iPhone 10",type:"phone",capacity:"48Gb", price:300, image:"/images/blue.jpg"},
    {id:6, title:"iPhone 12 Pro Max",desc: "This is iPhone 12 Pro Max",type:"phone",capacity:"124Gb", price:750, image:"/images/black.jpg"},
]

export default productsArray
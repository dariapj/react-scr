type ProductsProps = {
    title: string
    desc: string
    type: string
capacity: string
price: string
}

const productsArray:ProductsProps[] = [
    {title:"iPhone 14 Pro",desc: "This is iPhone 14 Pro",type:"phone",capacity:"64Gb", price:"600$"},
    {title:"iPhone 14",desc: "This is iPhone 14",type:"phone",capacity:"124Gb", price:"800$"},
    {title:"iPhone 13",desc: "This is iPhone 13",type:"phone",capacity:"72Gb", price:"500$"},
    {title:"iPhone 12",desc: "This is iPhone 12",type:"phone",capacity:"88Gb", price:"400$"},
    {title:"iPhone 10",desc: "This is iPhone 10",type:"phone",capacity:"48Gb", price:"300$"},
    {title:"iPhone 12 Pro Max",desc: "This is iPhone 12 Pro Max",type:"phone",capacity:"124Gb", price:"750$"},
]

export default productsArray
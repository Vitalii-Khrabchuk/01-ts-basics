interface Product { 
    readonly id: number;
    title: string;
    description?: string;
}

const Product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and fast',
};


console.log(`Product: ${JSON.stringify(Product)}`);

console.log(' ');
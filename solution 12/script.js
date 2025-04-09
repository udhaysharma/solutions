const products = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 25 },
    { name: "Phone", price: 999 },
    { name: "Monitor", price: 1200 }
  ];
  
  const expensiveProducts = products.filter(product => product.price > 1000);
  
  console.log(expensiveProducts);
  
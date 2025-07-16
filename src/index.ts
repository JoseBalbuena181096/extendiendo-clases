import products from "./products.json";
import * as fs from "fs";

class ListaDeCosas {
  name: string;
  cosas: Product[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(name: string) {
    super(name);
    // Lógica adicional para leer products.json y agregar productos usando addProduct
    // ...
    const productsJson = fs
      .readFileSync(__dirname + "/products.json")
      .toString();
    const productsDelArchivo = JSON.parse(productsJson);
    productsDelArchivo.forEach((product) => {
      this.addProduct(product);
    });
    // Ejemplo de cómo se puede invocar addProduct para agregar un producto
    // this.addProduct(new Product(/* parámetros del producto */));
  }
  addProduct(product: Product) {
    this.add(product);
  }

  getProduct(id: number): Product {
    // Implementación del método getProduct
    // ...
    return this.cosas.find((product) => product.id === id);
  }

  removeProduct(id: number): void {
    // Implementación del método removeProduct
    // ...
    this.cosas = this.cosas.filter((product) => product.id !== id);
  }

  getSortedByPrice(order: string): Product[] {
    // Implementación del método getSortedByPrice
    // ...
    return this.cosas.sort((a, b) => b.price - a.price);
  }
}

export { ListaDeProductos, Product };

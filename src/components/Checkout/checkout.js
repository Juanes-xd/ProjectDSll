import React, { Component } from "react";
import { products } from "./Pago";

export const amount = (precios) => {
  let final = precios.reduce(
    (acum, product) =>
      acum.price * acum.quantity + product.price * product.quantity
  );
  return `${final}`;
};

export default class Checkout extends Component {
  openchekout = (e) => {
    e.preventDefault();

    var handler = window.ePayco.checkout.configure({
      key: "efef92030f96cd757fa9d11d0e026571",
      test: true,
    });

    let data = {
      name: "Carrito",
      description: "Descripcion del carrito",
      currency: "cop",
      amount: amount(products),
      tax_base: "1000",
      tax: "1000",
      country: "co",
      lang: "en",
      external: "false",
    };
    handler.open(data);
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-yellow-700"
          type="button"
          onClick={this.openchekout}
        >
          Pagar
        </button>
      </React.Fragment>
    );
  }
}

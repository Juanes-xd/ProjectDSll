import { amount } from "../components/Checkout/checkout";

describe("Prueba lista de productos y sus precios", () => {
  test("Prueba suma de los precios", () => {
    let data = [
      {
        id: 1,
        price: 50000,
        quantity: 2,
      },
      {
        id: 2,
        price: 50000,
        quantity: 1,
      },
    ];
    let precio = amount(data);
    expect(precio).toBe("150000");
  });

  test("Prueba suma de los precios 2", () => {
    let data = [
      {
        id: 1,
        price: 10000,
        quantity: 3,
      },
      {
        id: 2,
        price: 40000,
        quantity: 1,
      },
    ];
    let precio = amount(data);
    expect(precio).toBe("70000");
  });
});

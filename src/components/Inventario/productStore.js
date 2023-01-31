import axios from "axios";

const getProductData = async (id) => {
  let productData = await axios.get("http://localhost:4000/products");
  let finalData = productData.data;
  if (finalData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return finalData;
};
const productsArray = [getProductData()];
export { productsArray, getProductData };

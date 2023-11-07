import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
medusa.orders.retrieveByCartId(cartId)
.then(({ order }) => {
  console.log(order.id);
});

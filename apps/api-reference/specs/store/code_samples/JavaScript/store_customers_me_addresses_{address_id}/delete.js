import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// must be previously logged
medusa.customers.addresses.deleteAddress(addressId)
.then(({ customer }) => {
  console.log(customer.id);
});

import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// must be previously logged in or use api token
medusa.admin.customers.update(customerId, {
  first_name: "Dolly"
})
.then(({ customer }) => {
  console.log(customer.id);
});

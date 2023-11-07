import Medusa from "@medusajs/medusa-js"
const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
// must be previously logged in or use api token
medusa.admin.collections.removeProducts(collectionId, {
  product_ids: [
    productId1,
    productId2
  ]
})
.then(({ id, object, removed_products }) => {
  console.log(removed_products)
})

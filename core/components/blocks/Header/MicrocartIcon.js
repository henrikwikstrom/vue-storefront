import { mapGetters } from 'vuex'
import { openMicrocart, isMicrocartOpen } from '@vue-storefront/core/modules/cart/features'

export default {
  name: 'MicrocartIcon',
  computed: {
    totalItems () {
      // return this.$store.getters.totals.quantity
      return 3
    },
    ...mapGetters({
      totals: 'cart/totals',
      totalQuantity: 'cart/totalQuantity'
    })
  },
  mixins: [
    openMicrocart,
    isMicrocartOpen
  ]
}

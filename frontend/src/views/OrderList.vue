<script>
  import NavBar from '../components/NavBar.vue';
  import CardOrder from '../components/CardOrder.vue';
  import { mapActions, mapState } from 'pinia';
  import { useProductOrderStore } from '../stores/productOrder';
  import { RouterLink } from 'vue-router'

  export default {
    name: "orderList",

    components: {
      NavBar,
      CardOrder
    },

    methods: {
    ...mapActions(useProductOrderStore, ["fetchOrderList"])
    },
    computed: {
      ...mapState(useProductOrderStore, ["orderList"])
    },
    created() {
      this.fetchOrderList();
    }
  }

  </script>

  <template>
    <NavBar />
    <div class="container mb-4">
      <div style="margin-top: 4.5em">
        <h3 class="text-center">Your Order List</h3>
      </div>
      <hr>
        <h4 v-if="orderList.length === 0" class="card-title" style="text-align: center;">Sorry, your order is empty <i class="bi bi-emoji-frown"></i></h4>
        <div v-if="orderList.length === 0" class="text-center" style="margin-top: 1rem;">
          <RouterLink to="/product-order" style="color:black; text-decoration: none;">
            <button type="button" class="btn btn-secondary">Start Order</button>
          </RouterLink>
        </div>
        <div class="row mb-4">
          <CardOrder 
            v-for="order in orderList"
            :key="order.id"
            :order="order"
          />
        </div>
  </div>
</template>
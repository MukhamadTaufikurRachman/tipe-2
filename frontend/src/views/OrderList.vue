<script>
  import NavBar from '../components/NavBar.vue';
  import CardOrder from '../components/CardOrder.vue';
  import { mapActions, mapState } from 'pinia';
  import { useProductOrderStore } from '../stores/productOrder';

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
        <div class="row mb-4">
          <CardOrder 
            v-for="order in orderList"
            :key="order.id"
            :order="order"
          />
        </div>
  </div>
</template>
<script>
  import NavBar from '../components/NavBar.vue';
  import { mapActions, mapState } from 'pinia';
  import { useProductOrderStore } from '../stores/productOrder';

  export default {
    name: "orderList",

    components: {
      NavBar
    },
  }

  </script>

  <template>
    <NavBar />
    <div class="container mb-4">
      <div style="margin-top: 4.5em">
        <h3 class="text-center">Your Order List</h3>
      </div>
      <hr>
  </div>
</template>
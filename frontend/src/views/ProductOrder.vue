<script>
  import NavBar from '../components/NavBar.vue';
  import { mapActions, mapState } from 'pinia';
  import { useProductOrderStore } from '../stores/productOrder';

  export default {
    name: "productOrder",

    components: {
      NavBar
    },

    data() {
      return {
        createOrder: {
          name: "",
          quantity: "",
          price: "",
        }
      }
    },

    methods: {
      ...mapActions(useProductOrderStore, ["addOrder"]),
      addOrderHandle() {
        this.addOrder(this.createOrder);
      }
    }
  }

</script>

<template>
  <NavBar />
  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Order Product Here</h3>
      <hr>
      <div class="row">
        <div class="col-6 mx-auto">
          <div class="card shadow p-3 mb-5 bg-white rounded" style="margin-top: 0.7rem">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-center"><i class="bi bi-boxes"></i>&nbsp;Order Product Form
              </h5>
              <hr>
              <form @submit.prevent="addOrderHandle" class="px-4 py-3">
                <div class="form-group">
                  <label>Product Name</label>
                  <input v-model="createOrder.name" type="text" class="form-control" placeholder="type product name">
                </div><br>
                <div class="form-group">
                  <label>Quantity</label>
                  <input v-model="createOrder.quantity" type="number" class="form-control" placeholder="type product quantity (minimum quantity is 1)">
                </div><br>
                <div class="form-group">
                  <label>Price</label>
                  <input v-model="createOrder.price" type="number" class="form-control" placeholder="type product price (minimum price is Rp. 100.000)">
                  </div><br>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-secondary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
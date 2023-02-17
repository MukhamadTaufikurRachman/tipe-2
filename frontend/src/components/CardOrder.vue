<script>
  export default {
    name: "cardOrder",
    props: ["order"],

    methods: {
      toIdr(price) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency", currency: "IDR"
        }).format(price);
      }
    }
  }
</script>

<template>
  <div class="col-3 mb-4 mx-auto">
    <!-- <pre>{{ order }}</pre> -->
    <div class="card mb-3 shadow bg-white rounded" style="margin-top: 0.5rem">
      <div class="card-body">
        <h5 class="card-title" style="text-align: center;">{{ order.name }}</h5>
        <hr>
        <p class="card-text" style="text-align: center;">Quantity: {{ order.quantity }}</p>
        <hr>
        <h6 class="card-title" style="text-align: center;">{{ toIdr(order.price) }}</h6>
      </div>
  </div>
  </div>
</template>
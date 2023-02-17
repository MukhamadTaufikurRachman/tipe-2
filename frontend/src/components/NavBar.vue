<script>
  import { mapActions } from 'pinia';
  import { RouterLink } from 'vue-router'
  import { useProductOrderStore } from '../stores/productOrder';

  export default {
    name: "navbar",

    components: {
      RouterLink
    },

    data() {
      return {
        username: localStorage.getItem("username")

      }
    },

    methods: {
      ...mapActions(useProductOrderStore, ["doLogout"])
    },

  }
  </script>

  <template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: black;">
      <div class="container-fluid">
        <RouterLink to="/product-Order" style="color:black; text-decoration: none;">
          <a class="navbar-brand" href="#"><i class="bi bi-box-fill"></i> - PRODUCT</a>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/product-order" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Product Order</a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/order-list" style="color:black; text-decoration: none;">
                <a class="nav-link" href="#">Order List</a>
              </RouterLink>
            </li>
          </ul>
          <h6 style="color: white; margin-top: 0.4rem;">Hello, {{ username }} &nbsp;&nbsp; | &nbsp;&nbsp; </h6>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a @click.prevent="doLogout" class="nav-link" href="#"><i class="bi bi-arrow-left-square-fill"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </nav>
</template>
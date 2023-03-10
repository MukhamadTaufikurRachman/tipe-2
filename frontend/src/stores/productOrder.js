import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "http://localhost:3000";

export const useProductOrderStore = defineStore("productOrder", {
  state: () => {
    return {
      access_token: localStorage.getItem("access_token"),
      username: localStorage.getItem("username"),
      orderList: [],
    };
  },

  actions: {
    async doRegister(val) {
      try {
        await axios.post(`${baseURL}/register`, val);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success register new user",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/login");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async addOrder(val) {
      try {
        const { data } = await axios.post(`${baseURL}/product-order/add`, val, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success add new order data",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/order-list");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async fetchOrderList() {
      try {
        const { data } = await axios.get(`${baseURL}/product-order/list`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.orderList = data;
      } catch (err) {
        console.log(err);
      }
    },

    async doLogin(val) {
      try {
        const { data } = await axios.post(`${baseURL}/login`, val);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success login",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/product-order");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    doLogout() {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Log out!", "Success Logout.", "success");

          localStorage.clear();
          this.$router.push("/login");
          // this.isLogin = false;
        }
      });
    },
  },
});

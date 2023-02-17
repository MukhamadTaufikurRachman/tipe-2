import { defineStore } from "pinia";
import axios from "axios";

const baseURL = "http://localhost:3000";

export const useProductOrderStore = defineStore("productOrder", {
  state: () => {
    return {
      access_token: localStorage.getItem("access_token"),
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

    async doLogin(val) {
      try {
        const { data } = await axios.post(`${baseURL}/login`, val);
        localStorage.setItem("access_token", data.access_token);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "success login",
          showConfirmButton: false,
          timer: 1500,
        });

        this.$router.push("/product-Order");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },
  },
});

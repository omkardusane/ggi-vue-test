import { defineStore } from "pinia";
import axios from "axios";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      const response = await axios.get("http://localhost:5000/items");
      this.items = response.data;
    },
    async addItem(name,descr,  by ) {
      const response = await axios.post("http://localhost:5000/items", { name , descr, lead:by});
      this.items.push(response.data);
    },
  },
});
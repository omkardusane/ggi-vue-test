<template>
    <form @submit.prevent="handleSubmit">
      <input style="width: 100%;margin: 1rem;"  v-model="name" placeholder="Enter item name" />
      <input  style="width: 100%;margin: 1rem;"  v-model="by" placeholder="Lead Name" />
      <textarea style="width: 100%;margin: 1rem;" v-model="descr" placeholder="Description" />

      <div>
        <button type="submit">Add Initiative</button>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useItemsStore } from "../store/items";
  
  const store = useItemsStore();
  const name = ref("");
  const descr = ref("");
  const by = ref("");
  const error = ref("");
  
  const handleSubmit = async () => {
    if (!name.value.trim()) {
      error.value = "Name is required";
      return;
    }
    await store.addItem(name.value, descr.value, by.value);
    name.value = "";
    error.value = "";
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  
<template>
    <div>
      <h2>Initiatives List</h2>
      <ul>
        <li style="border: 1px solid #45baed;border-radius: 5px;" v-for="item in store.items" :key="item.id">
             <h3>{{ item.name }}</h3>
             by {{ item.lead }}:
            <div style="content: normal;">
              {{ item.descr }}
            </div>
        </li>
        <div v-if="!store.items.length" >
           no items yet!
        </div>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import { useItemsStore } from "../store/items";
  
  const store = useItemsStore();
  onMounted(() => {
    store.fetchItems();
  });
  </script>
  
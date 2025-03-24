<template>
  <div class="container">
    <h1>Global X Initiatives Management Portal</h1> 
    <div class="content">
      <ItemForm />
      <ItemList />
    </div>
  </div>
</template>

<script setup>
import ItemList from "../components/ItemList.vue";
import ItemForm from "../components/ItemForm.vue";
</script>


<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap; /* Ensures responsiveness */
}

.content > * {
  flex: 1;
  min-width: 300px; /* Prevents items from shrinking too much */
}
</style>
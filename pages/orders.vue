<template>
  <div>
    <h2 class="text-center  text-3xl mt-8">Order Summary</h2>
    <div class="flex justify-center mt-8 min-h-screen">
      <div class="w-full max-w-8xl bg-gray-200 p-6 rounded-lg shadow-md">
        <div v-if="items.length === 0" class="text-center">
          <p class="text-lg">Your cart is empty.</p>
        </div>
        <div v-else>
          <div v-for="item in items" :key="item.id"
            class="flex justify-between items-center p-4 bg-white rounded shadow-md mb-4">
            <div>
              <p>{{ item.name }} - {{ item.quantity }} x {{ item.price }}$</p>
            </div>
            <div class="flex items-center">
              <button @click="decreaseQuantity(item)" class="bg-red-500 text-white px-2 rounded">-</button>
              <span class="mx-2">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="bg-green-500 text-white px-2 rounded">+</button>
              <strong class="ml-4">{{ item.quantity * item.price }}$</strong>
            </div>
          </div>
          <div class="flex justify-between font-bold mt-4">
            <p>Total:</p>
            <p>{{ totalPrice }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// definePageMeta({
//   layout: false
// });

import { useOrderStore } from '~/stores/Order';

const orderStore = useOrderStore();

const items = orderStore.items;
const totalPrice = orderStore.totalPrice;

const increaseQuantity = (item) => {
  orderStore.updateQuantity(item.id, item.quantity + 1);
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    orderStore.updateQuantity(item.id, item.quantity - 1);
  } else {
    orderStore.removeItem(item.id);
  }
};
</script>

<template>
  <div>
    <div class="flex justify-center mt-8 ">
      <div class="grid  grid-cols-4 gap-6 w-full max-w-8xl bg-gray-200">
        <div v-for="item in menuItems" :key="item.id"
          class="p-4 bg-white rounded shadow-md text-center cursor-pointer hover:bg-gray-400 bg-gray-300 rounded-3xl">
          <NuxtImg class="block mx-auto w-64 h-64 object-cover rounded-3xl" :src="item.image" />
          <br />
          <p class="text-2xl">{{ item.name }}</p>
          <h5 class="text-3xl"><strong>{{ item.price }}$</strong></h5>
          <button
            class="mt-4 rounded-xl px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            @click="addToCart(item)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script setup>

import { useOrderStore } from '~/stores/Order';

// Define menu items as an array of objects
const menuItems = [
  { id: 1, name: 'Chrispy Chicken Burger', price: 47, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7C7njKUUt7Gf8tVBBocikQHF0Pv1BANiQA&s' },
  { id: 2, name: 'Italian Chicken Pizza', price: 36, image: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/12/greek-pizza-21-001.jpg' },
  { id: 3, name: 'Sandar Mo:Mo', price: 51, image: 'https://images.squarespace-cdn.com/content/v1/55be995de4b071c106b3b4c0/6af0cbeb-8a58-4993-ab68-8e9919d6d04c/Salmon+Dumplings-6.jpg' },
  { id: 4, name: 'Chicken Kima Noodles', price: 39, image: 'https://spicynasta.com/wp-content/uploads/2024/08/spicy-nasta.jpg' },
  { id: 5, name: 'Chitwan BhetGhat Taas', price: 49, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkNY76ZBfOOOU4w25O7R5tC4Gueuv54Hv5g&s' },
  { id: 6, name: 'Khasi\'s Choila', price: 29, image: 'https://www.gurkhas.com.au/wp-content/uploads/2024/04/Buffalo-Choila1.jpg' },
  { id: 7, name: 'Butter-Chicken', price: 33, image: 'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg' },
  { id: 8, name: 'Garlic Nan', price: 13, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BbdL6R0yUZPYjFFu7-a31qPfFBIyIENEQ&s' },
  { id: 9, name: 'Paneer Tikka', price: 32, image: 'https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2023/01/Instant-Paneer-Tikka-_3.jpg?resize=650%2C619&ssl=1' },
  { id: 10, name: 'Chinese Duck Choila', price: 21, image: 'https://junifoods.com/wp-content/uploads/2023/03/Pork-Choila-Spiced-Pork-Salad-%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%95-%E0%A4%9B%E0%A5%8B%E0%A4%87%E0%A4%B2%E0%A4%BE-480x270.jpg' },
  { id: 11, name: 'Japanese Sushi', price: 43.5, image: 'https://t3.ftcdn.net/jpg/06/35/90/18/360_F_635901844_WGA5JzN6H5AE8tDBMrSgkeEsYn3wzacH.jpg' },
  { id: 12, name: 'Spanish Noodles', price: 23, image: 'https://florafoods.com/wp-content/uploads/AdobeStock_224044706-1-scaled.jpeg' },
];


const orderStore = useOrderStore();

function addToCart(item) {
  orderStore.addItem({ id: item.id, name: item.name, price: item.price });
}

</script>

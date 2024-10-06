<template>
    <div>
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FoodHub</span>
            </a>
            <div class="flex flex-col items-center mt-8">
              <p class="text-3xl text-white">414 Columbus Ave, San Francisco, CA 94133, United States</p>
              <h3 class="text-2xl text-white">Open everyday from 9:00am-11:00pm</h3>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li><NuxtLink class="hover:underline me-4 md:me-6" to="/">Home</NuxtLink></li>
              <li><NuxtLink class="hover:underline me-4 md:me-6" to="/menu">Menu</NuxtLink></li>
              <li><NuxtLink class="hover:underline me-4 md:me-6" to="/orders">Orders</NuxtLink></li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  </template>
  
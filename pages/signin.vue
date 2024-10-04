<template>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
    <form>
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email"
               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-300 ease-in-out">
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-600 font-medium mb-2">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"
               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition-all duration-300 ease-in-out">
      </div>
      <button type="submit"
              class="w-full bg-yellow-700 text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out focus:outline-none">
        Sign In
      </button>
      <p class="text-gray-600 mt-4 text-center">
        Don't have an account? 
        <NuxtLink to="/signup" class="text-teal-500 hover:underline">Sign Up</NuxtLink>
      </p>
    </form>
  </div>
</div>



</template>
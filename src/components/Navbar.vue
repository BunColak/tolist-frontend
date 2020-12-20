<template>
  <nav class="p-4 bg-indigo-700 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex">
        <router-link to="/" class="font-semibold text-lg">ToList</router-link>
        <div>
          <router-link
            to="/features"
            class="text-lg ml-8"
            active-class="font-bold"
            >Features</router-link
          >
          <router-link
            to="/templates"
            class="text-lg ml-4"
            active-class="font-bold"
            >Templates</router-link
          >
        </div>
      </div>
      <div>
        <button class="mx-4">Login</button>
        <button class="mx-4 border-2 px-2 py-1 rounded">Signup</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

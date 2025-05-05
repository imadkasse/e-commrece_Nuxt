<script lang="ts" setup>
const route = useRoute();
const currentPath = route.fullPath.split("/")[1];

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log(formData);
};
</script>

<template>
  <div class="mt-16 mx-4">
    <!-- show current route -->
    <div class="flex justify-between items-center mb-8">
      <p class="capitalize font-mono">
        <span class="text-gray-300"> Home / </span>
        {{ currentPath }}
      </p>
    </div>

    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <!-- Contact Info Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p class="text-gray-600">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Email</h3>
                <p class="text-gray-600">support@example.com</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Phone</h3>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Location</h3>
                <p class="text-gray-600">123 Business Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="mt-1 py-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            >
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              class="mt-1 py-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="mt-1 py-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-hoverBtn transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

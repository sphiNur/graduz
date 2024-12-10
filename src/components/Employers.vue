<template>
  <div class="container">
    <!-- Background Image -->
    <n-image :src="backgrand" width="100%" height="100%" object-fit="cover" preview-disabled />
    
    <!-- Form Container -->
    <form>
      <h2>{{title}}</h2>
      <div class="form-row">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
      </div>
      <div class="form-row">
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Address" />
      </div>
      <input type="text" placeholder="Subject" />
      
      <input type="file" id="file" name="file" />

      <!-- Button row -->
      <div class="button-row">
        <button type="submit">REGISTER</button>
        <button type="button" @click="goToRoute('employers')">BACK</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { NImage } from 'naive-ui'
import backgrand from '../assets/images/graduz-mk.jpg'

const router = useRouter()
const route = useRoute()

const title = ref(route.query.title || 'Employers') // Default to 'Employers' if no title is provided

const goToRoute = (route) => {
  router.push(`/`)
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
}

form {
    position: absolute;
    top: 50%; /* Center the form vertically */
    left: 50%;
    transform: translate(-50%, -50%); /* Offset the form to center it */
    display: grid; /* Using grid layout */
    gap: 15px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

form input {
    padding: 10px;
    border: none;
    border-bottom: 2px solid #ccc;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    color: black;
}

form input:focus {
    border-bottom: 2px solid #4f5a66;
}

.button-row {
    display: flex;
    gap: 1rem;
}

button {
    background-color: black;
    color: white;
    padding: 15px 30px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    flex: 1;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #333;
}
</style>

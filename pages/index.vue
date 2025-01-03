<script setup lang="ts"></script>

<template>
  <div class="hero bg-base-300 mb-5">
    <div class="hero-content flex-col lg:flex-row">
      <img
        src="https://blogs.nasa.gov/pluto/wp-content/uploads/sites/253/2015/10/pluto-heart.png"
        alt="Pluto"
        class="max-w-48 rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Hi</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
    </div>
  </div>

  <section class="flex justify-around mb-10">
    <div class="card card-compact bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src="https://solarsystem.nasa.gov/internal_resources/6023/ganymedehero.jpg"
          alt="Ganymede"
        />
      </figure>

      <div class="card-body">
        <h2 class="card-title">Blog</h2>
        <p>...</p>
      </div>
    </div>

    <div class="card card-compact bg-base-300 w-96 shadow-xl">
      <figure>
        <img
          src="https://wallpapers.com/images/hd/uranus-1908-x-1146-picture-ml36g1awgrs4fvf1.jpg"
          alt="Uranus"
        />
      </figure>

      <div class="card-body">
        <h2 class="card-title">Songs</h2>
        <ul class="menu bg-base-200 rounded-box">
          <li>
            <NuxtLink to="songs/coversongs"> Coversongs </NuxtLink>
          </li>
          <li><NuxtLink>Sea Shanties</NuxtLink></li>
          <li><NuxtLink>Soundtracks</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="card card-compact bg-base-300 w-96 shadow-xl">
      <figure>
        <img src="https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg" alt="Saturn" />
      </figure>

      <div class="card-body">
        <h2 class="card-title">Project X</h2>
        <p>???</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<template>
  <main class="flex min-h-dvh">
    <section class="w-1/2 flex justify-center items-center">
      <div class="img w-80">
        <img src="/img-header.webp" alt="Hero Image" class="w-3/4 mx-auto" />
      </div>
    </section>
    <section class="w-1/2 flex justify-center items-center">
      <div class="flex flex-col">
        <h1
          class="bg-gradient-to-r text-3xl font-bold from-pink-500 to-purple-500 inline-block text-transparent bg-clip-text"
        >
          Métodos Numéricos
        </h1>
        <div class="flex gap-4">
          <RouterLink class="text-white font-bold" to="/metodo-pivoteo">
            <div
              class="bg-pv-purple w-28 rounded-full px-3 py-1 text-center hover:bg-purple-600 mt-5"
            >
              Iniciar
            </div>
          </RouterLink>

          <a
            class="bg-pv-purple w-28 rounded-full px-3 py-1 text-center hover:bg-purple-600 mt-5 text-white font-bold"
            href="/MANUAL_DE_USUARIO.pdf"
            download=""
          >
            Manual
          </a>
        </div>
      </div>
      <div></div>
    </section>
  </main>
</template>

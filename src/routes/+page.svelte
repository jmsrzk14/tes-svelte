<script lang="ts">
  import CVCard from '$lib/components/CVCard.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>Direktori CV Profesional</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <section class="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-12 md:py-20">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Izin Tampil, Kami Kelompok Terserah 😎
        </h1>
        <p class="text-xl text-white/90 mb-8">
          Namanya Terserah, tapi CV-nya nggak sembarangan. Kenalan dulu sama talenta di balik kelompok ini!
        </p>
        <a href="#featured" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors duration-200 bg-white text-primary-700 hover:bg-gray-100">
          Lihat Semua CV
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <section id="featured" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Members
      </h2>
    </div>

<<<<<<< HEAD
	<div class= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
=======
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">   
>>>>>>> 6734669cd6ae87e074b82e33fa115dbdbb6e20db
		{#each data.cvs as cv}
			<CVCard {cv} />
		{/each}
	</div>
  </section>
</div>

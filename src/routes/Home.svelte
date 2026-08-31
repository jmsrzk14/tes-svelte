<script lang="ts">
  import { navigate } from '../lib/stores/router';
  import { members } from '../lib/data/members';
  import CVCard from '../lib/components/CVCard.svelte';
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700">
    <div class="container-custom py-20 md:py-32">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Temukan Talenta Terbaik
        </h1>
        <p class="text-xl text-white/90 mb-8">
          Platform showcase CV profesional untuk menampilkan keahlian dan pengalaman para talenta terbaik.
        </p>
        <a href="/members" on:click={(e) => { e.preventDefault(); navigate('/members'); }} class="btn-primary bg-white text-primary-700 hover:bg-gray-100">
          Lihat Semua CV
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Featured Members -->
  <section class="container-custom py-16 md:py-24">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Members
      </h2>
      <p class="text-lg text-gray-600">
        Berikut adalah beberapa profil profesional yang dapat Anda jelajahi
      </p>
    </div>
    
    {#if members.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each members as member}
          <CVCard {member} />
        {/each}
      </div>
    {:else}
      <div class="text-center py-12">
        <p class="text-gray-500 text-lg">
          Belum ada member yang terdaftar.
        </p>
      </div>
    {/if}
  </section>

  <!-- Features Section -->
  <section class="bg-white py-16 md:py-24">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Profesional</h3>
          <p class="text-gray-600">CV yang ditampilkan dengan desain elegan dan profesional</p>
        </div>
        
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Responsive</h3>
          <p class="text-gray-600">Tampilan optimal di semua perangkat</p>
        </div>
        
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Mudah Dikelola</h3>
          <p class="text-gray-600">Data mudah diupdate tanpa perlu mengubah kode</p>
        </div>
      </div>
    </div>
  </section>
</div>

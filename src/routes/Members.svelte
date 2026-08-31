<script lang="ts">
  import { members } from '../lib/data/members';
  import CVCard from '../lib/components/CVCard.svelte';
</script>

<div class="container-custom py-12 md:py-16">
  <div class="mb-8">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Our Members
    </h1>
    <p class="text-lg text-gray-600">
      Jelajahi profil profesional dari anggota kami
    </p>
  </div>

  {#if members.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each members as member}
        <CVCard {member} />
      {/each}
    </div>
  {:else}
    <div class="text-center py-16">
      <p class="text-gray-500 text-lg">
        Belum ada member yang terdaftar.
      </p>
    </div>
  {/if}
</div>

<script lang="ts">
  import type { Member } from '../data/types';
  import CVCard from './CVCard.svelte';

  export let members: Member[] = [];
  export let emptyText = 'Belum ada member yang terdaftar.';
</script>

{#if members.length > 0}
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {#each members as member}
      <CVCard {member} />
    {/each}
  </div>
{:else}
  <div class="rounded-2xl border border-dashed border-gray-200 bg-white py-14 text-center shadow-sm">
    <p class="text-lg text-gray-500">{emptyText}</p>
  </div>
{/if}

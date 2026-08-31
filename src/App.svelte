<script lang="ts">
  import { currentRoute } from './lib/stores/router';
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Members from './routes/Members.svelte';
  import MemberDetail from './routes/MemberDetail.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  
  <main class="flex-1">
    {#if $currentRoute.path === '/'}
      <Home />
    {:else if $currentRoute.path === '/members'}
      <Members />
    {:else if $currentRoute.path === '/members/:id'}
      <MemberDetail />
    {/if}
  </main>
  
  <Footer />
</div>
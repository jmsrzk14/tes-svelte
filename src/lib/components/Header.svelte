<script lang="ts">
  import { navigate } from '../stores/router';
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function handleNavigate(path: string) {
    navigate(path);
    isMenuOpen = false;
  }
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="container-custom">
    <div class="flex justify-between items-center h-16">
      <a href="/" on:click={(e) => { e.preventDefault(); handleNavigate('/'); }} class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold">CV</span>
        </div>
        <span class="text-xl font-bold text-gray-900">CV Showcase</span>
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" on:click={(e) => { e.preventDefault(); handleNavigate('/'); }} class="text-gray-700 hover:text-primary-600 font-medium">Home</a>
        <a href="/members" on:click={(e) => { e.preventDefault(); handleNavigate('/members'); }} class="text-gray-700 hover:text-primary-600 font-medium">Members</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden pb-4">
        <div class="flex flex-col space-y-2">
          <a href="/" on:click={(e) => { e.preventDefault(); handleNavigate('/'); }} class="px-3 py-2 rounded-lg hover:bg-gray-100 font-medium">Home</a>
          <a href="/members" on:click={(e) => { e.preventDefault(); handleNavigate('/members'); }} class="px-3 py-2 rounded-lg hover:bg-gray-100 font-medium">Members</a>
        </div>
      </div>
    {/if}
  </nav>
</header>
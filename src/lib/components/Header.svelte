<script lang="ts">
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function handleNavigate() {
    isMenuOpen = false;
  }
</script>

<header class="bg-white shadow-sm sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold">CV</span>
        </div>
        <span class="text-xl font-bold text-gray-900">CV Showcase</span>
      </a>
    </div>
  </nav>
</header>

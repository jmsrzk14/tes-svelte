<script lang="ts">
  let { cv }: {
    cv: {
      slug: string;
      name: string;
      role: string;
      email: string;
      avatar: string;
    }
  } = $props();
</script>

<a href={`/cv/${cv.slug}`} class="block group cursor-pointer h-full">
  <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
    <div class="p-6 flex flex-col h-full">
      <div class="flex items-center space-x-4 mb-4">
        <div class="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          {#if cv.avatar}
            <img src={cv.avatar} alt={cv.name} class="w-full h-full object-cover" />
          {:else}
            <div class="w-full h-full flex items-center justify-center">
              <span class="text-2xl font-bold text-gray-400">
                {cv.name.charAt(0)}
              </span>
            </div>
          {/if}
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {cv.name}
          </h3>
          <p class="text-sm text-gray-600">{cv.role}</p>
          <!-- Using email as a substitute for location if needed, or just display email -->
          <p class="text-xs text-gray-500 mt-1">{cv.email}</p>
        </div>
      </div>
      
      <!-- Spacer to push button to bottom if we had more content -->
      <div class="flex-grow"></div>
      
      <div class="mt-4 pt-4 border-t border-gray-100 flex items-center text-primary-600 text-sm font-medium">
        Lihat Profil Lengkap
        <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</a>

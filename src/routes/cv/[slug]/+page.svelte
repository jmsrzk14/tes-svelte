<script lang="ts">
  let { data } = $props();
  
  let tabNames = $derived(Object.keys(data.cv.tabs));
  let activeTab = $state(tabNames[0]);
</script>

<svelte:head>
  <title>{data.cv.name} - Profil Lengkap</title>
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <div class="bg-gradient-to-r from-primary-600 to-primary-700 pb-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-12">
      <div class="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-8">
        <div class="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
			<img src={data.cv.avatar} alt={data.cv.name} class="w-full h-full object-cover" />
        </div>
        <div class="text-center md:text-left pb-4">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{data.cv.name}</h1>
          <p class="text-xl text-white/90">{data.cv.role}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-16">
    <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div class="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-100">
        <a href={`mailto:${data.cv.email}`} class="flex items-center space-x-2 text-gray-600 hover:text-primary-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>{data.cv.email}</span>
        </a>
      </div>

      <div class="flex space-x-4 mb-8 border-b overflow-x-auto">
        {#each tabNames as tab}
          <button
            class={`px-4 py-2 font-medium transition-colors whitespace-nowrap border-b-2 ${
              activeTab === tab
                ? 'text-primary-600 border-primary-600'
                : 'text-gray-600 hover:text-gray-900 border-transparent'
            }`}
            onclick={() => activeTab = tab}
          >
            {tab}
          </button>
        {/each}
      </div>

      <div class="prose prose-slate prose-lg max-w-3xl prose-headings:text-slate-900 prose-a:text-primary-600 hover:prose-a:text-primary-500 min-h-[300px]">
        {@html data.cv.tabs[activeTab]}
      </div>
    </div>
  </div>
</div>

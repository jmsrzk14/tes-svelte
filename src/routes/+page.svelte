<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Direktori CV Profesional</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<header class="text-center max-w-3xl mx-auto mb-20">
			<h1 class="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
				Direktori Tim
			</h1>
			<p class="text-xl text-slate-600 leading-relaxed">
				Kenali Bambang.
			</p>
		</header>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each data.cvs as cv}
				<a 
					href={`/cv/${cv.slug}`} 
					class="group flex flex-col items-center bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 ring-1 ring-slate-900/5"
				>
					<div class="relative w-32 h-32 rounded-full mb-6 p-1 bg-gradient-to-tr from-indigo-500 to-cyan-400 group-hover:scale-105 transition-transform duration-300">
						<img 
							src={cv.avatar} 
							alt={`Avatar ${cv.name}`} 
							class="w-full h-full object-cover rounded-full border-4 border-white" 
						/>
					</div>
					
					<div class="text-center w-full">
						<h2 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
							{cv.name}
						</h2>
						<p class="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
							{cv.role}
						</p>
						
						<div class="inline-flex items-center justify-center px-6 py-2.5 bg-slate-50 text-indigo-600 rounded-full text-sm font-semibold group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors w-full">
							Lihat Profil Lengkap <span class="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

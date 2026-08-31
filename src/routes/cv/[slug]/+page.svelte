<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.cv.name} - Profil Lengkap</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
	<div class="max-w-4xl mx-auto">
		<!-- Navigation -->
		<nav class="mb-8">
			<a href="/" class="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors group">
				<svg class="w-5 h-5 mr-2 -ml-1 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				Kembali ke Direktori
			</a>
		</nav>

		<!-- Main Card -->
		<main class="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5 overflow-hidden">
			<!-- Header Banner -->
			<div class="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 relative">
				<!-- Abstract shapes for decoration -->
				<div class="absolute inset-0 opacity-20">
					<svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
						<polygon fill="white" points="0,100 100,0 100,100"/>
					</svg>
				</div>
			</div>

			<!-- Profile Section -->
			<div class="px-8 sm:px-12 pb-12 relative -mt-24">
				<div class="flex flex-col sm:flex-row sm:items-end gap-8 mb-12 border-b border-slate-100 pb-10">
					<!-- Avatar -->
					<div class="relative w-40 h-40 rounded-full p-1.5 bg-white shadow-lg flex-shrink-0">
						<img src={data.cv.avatar} alt={`Avatar ${data.cv.name}`} class="w-full h-full object-cover rounded-full" />
					</div>
					
					<!-- Info -->
					<div class="flex-1 pb-2">
						<h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
							{data.cv.name}
						</h1>
						<p class="text-xl text-indigo-600 font-medium mb-4">
							{data.cv.role}
						</p>
						
						<a href={`mailto:${data.cv.email}`} class="inline-flex items-center px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors ring-1 ring-inset ring-slate-200">
							<svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							{data.cv.email}
						</a>
					</div>
				</div>

				<!-- Markdown Body -->
				<div class="prose prose-slate prose-lg max-w-3xl prose-headings:text-slate-900 prose-a:text-indigo-600 hover:prose-a:text-indigo-500">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html data.cv.htmlContent}
				</div>
			</div>
		</main>
	</div>
</div>

<script lang="ts">
  import { members } from '../lib/data/members';
  import MemberGrid from '../lib/components/MemberGrid.svelte';
  import SectionHeader from '../lib/components/SectionHeader.svelte';
  import { navigate } from '../lib/stores/router';
</script>

<div class="page-shell">
  <section class="relative overflow-hidden bg-gray-900">
    <!-- Decorative Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div class="absolute top-0 -right-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 -left-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative py-16 md:py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left Content -->
        <div>
          <p class="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            CV Showcase
          </p>
          
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Temukan Talenta Terbaik untuk Tim Anda
          </h1>
          
          <p class="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Platform showcase CV profesional untuk menampilkan keahlian dan pengalaman para talenta terbaik di bidangnya.
          </p>

          <a href="/members" on:click={(e) => { e.preventDefault(); navigate('/members'); }} class="group inline-flex items-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5">
            Lihat Semua CV
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <!-- Right Content - Animated Stats Cards -->
        <div class="relative hidden lg:block">
          <div class="relative h-[350px]">
            <!-- Card 1 - Floating Animation -->
            <div class="absolute top-10 left-8 w-48 bg-gray-800/90 backdrop-blur-xl rounded-xl p-5 border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-300 animate-float">
              <div class="text-3xl font-bold text-white mb-1">500+</div>
              <div class="text-sm text-gray-400">Talenta Bergabung</div>
            </div>

            <!-- Card 2 - Floating Animation Delayed -->
            <div class="absolute top-20 right-12 w-48 bg-gray-800/90 backdrop-blur-xl rounded-xl p-5 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300 animate-float-delayed">
              <div class="text-3xl font-bold text-white mb-1">200+</div>
              <div class="text-sm text-gray-400">Perusahaan Partner</div>
            </div>

            <!-- Card 3 - Floating Animation More Delayed -->
            <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 bg-gray-800/90 backdrop-blur-xl rounded-xl p-5 border border-white/20 shadow-2xl -rotate-1 hover:rotate-0 transition-all duration-300 animate-float-slow">
              <div class="text-3xl font-bold text-white mb-1">95%</div>
              <div class="text-sm text-gray-400">Kepuasan Klien</div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary-500/20 rounded-full animate-spin-slow"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary-500/30 rounded-full"></div>
          </div>
        </div>

        <!-- Mobile Stats (Visible only on mobile) -->
        <div class="grid grid-cols-3 gap-4 lg:hidden">
          <div class="bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-white/20 text-center">
            <div class="text-2xl font-bold text-white mb-1">500+</div>
            <div class="text-xs text-gray-400">Talenta</div>
          </div>
          <div class="bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-white/20 text-center">
            <div class="text-2xl font-bold text-white mb-1">200+</div>
            <div class="text-xs text-gray-400">Partner</div>
          </div>
          <div class="bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-white/20 text-center">
            <div class="text-2xl font-bold text-white mb-1">95%</div>
            <div class="text-xs text-gray-400">Puas</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) rotate(-3deg); 
      }
      50% { 
        transform: translateY(-20px) rotate(-1deg); 
      }
    }
    
    @keyframes floatDelayed {
      0%, 100% { 
        transform: translateY(0px) rotate(2deg); 
      }
      50% { 
        transform: translateY(-15px) rotate(4deg); 
      }
    }
    
    @keyframes floatSlow {
      0%, 100% { 
        transform: translate(-50%, 0px) rotate(-1deg); 
      }
      50% { 
        transform: translate(-50%, -10px) rotate(1deg); 
      }
    }
    
    @keyframes spinSlow {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-float-delayed {
      animation: floatDelayed 5s ease-in-out infinite;
    }
    
    .animate-float-slow {
      animation: floatSlow 7s ease-in-out infinite;
    }
    
    .animate-spin-slow {
      animation: spinSlow 20s linear infinite;
    }
  </style>

  <section class="section-shell">
    <SectionHeader
      eyebrow="Featured Members"
      title="Profil profesional yang siap dibaca"
      description="Berikut adalah beberapa profil profesional yang dapat Anda jelajahi dalam satu tampilan yang konsisten."
    />
    <MemberGrid {members} />
  </section>

  <section class="bg-white py-16 md:py-24">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="surface-panel p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Profesional</h3>
          <p class="text-gray-600">CV yang ditampilkan dengan desain elegan dan profesional.</p>
        </div>

        <div class="surface-panel p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Responsive</h3>
          <p class="text-gray-600">Tampilan optimal di semua perangkat.</p>
        </div>

        <div class="surface-panel p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Mudah Dikelola</h3>
          <p class="text-gray-600">Data mudah diupdate tanpa perlu mengubah kode.</p>
        </div>
      </div>
    </div>
  </section>
</div>
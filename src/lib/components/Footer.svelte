<script lang="ts">
  import { navigate } from '../stores/router';
</script>

<footer class="bg-gray-900 text-white">
  <div class="container-custom py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">CV</span>
          </div>
          <span class="text-xl font-bold">CV Showcase</span>
        </div>
        <p class="text-gray-400">
          Platform untuk menampilkan CV profesional dengan desain yang elegan dan modern.
        </p>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="/" on:click={(e) => { e.preventDefault(); navigate('/'); }} class="text-gray-400 hover:text-white transition-colors">Home</a></li>
          <li><a href="/members" on:click={(e) => { e.preventDefault(); navigate('/members'); }} class="text-gray-400 hover:text-white transition-colors">Members</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Contact</h3>
        <p class="text-gray-400">
          Email: info@cvshowcase.com<br/>
          Phone: +62 812  3456 7890
        </p>
      </div>
    </div>
    
    <div class="border-t border-gray-800 mt-8 pt-8 text-center">
      <p class="text-gray-400">
        © 2024 CV Showcase. All rights reserved.
      </p>
    </div>
  </div>
</footer>
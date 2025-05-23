export default function Footer() {
    return `
    <footer class="bg-pixel-dark text-gray-300 py-16 px-4">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-4 gap-12">
                <div>
                    <h3 class="text-white text-xl font-bold mb-6 flex items-center">
                        <div class="w-8 h-8 bg-pixel-blue rounded-lg flex items-center justify-center mr-2">
                            <span class="text-white font-bold">P</span>
                        </div>
                        PixelFrame
                    </h3>
                    <p class="mb-4">
                        Spesialis desain UI/UX untuk startup dan UMKM di Indonesia.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-dribbble text-xl"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition">
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-white text-lg font-bold mb-6">Tautan Cepat</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="hover:text-white transition">Beranda</a></li>
                        <li><a href="#layanan" class="hover:text-white transition">Layanan</a></li>
                        <li><a href="#portofolio" class="hover:text-white transition">Portofolio</a></li>
                        <li><a href="#testimoni" class="hover:text-white transition">Testimoni</a></li>
                        <li><a href="#kontak" class="hover:text-white transition">Kontak</a></li>
                    </ul>
                </div>

                <div id="kontak">
                    <h3 class="text-white text-lg font-bold mb-6">Hubungi Kami</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <i class="fas fa-map-marker-alt mt-1 mr-3 text-pixel-blue"></i>
                            <span>Jl. Digital No. 123, Jakarta</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone-alt mr-3 text-pixel-blue"></i>
                            <span>0812-3456-7890</span>
                        </li>
                        <li class="flex items-center">
                            <i class="far fa-envelope mr-3 text-pixel-blue"></i>
                            <span>contact@pixelframe.id</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white text-lg font-bold mb-6">Newsletter</h3>
                    <p class="mb-4">
                        Dapatkan tips desain UI/UX langsung ke email Anda.
                    </p>
                    <form class="flex">
                        <input type="email" placeholder="Email Anda"
                            class="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none">
                        <button type="submit"
                            class="bg-pixel-blue text-white px-4 rounded-r-lg hover:bg-blue-600 transition">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
                <p>© 2023 PixelFrame Studio. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `
}
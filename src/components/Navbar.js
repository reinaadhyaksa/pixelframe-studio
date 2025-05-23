export default function Navbar() {
    return `
    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#home" class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-pixel-blue rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-lg">P</span>
                </div>
                <span class="text-xl font-bold">Pixel<span class="text-pixel-blue">Frame</span></span>
            </a>

            <div class="hidden md:flex items-center space-x-8">
                <a href="#layanan" class="hover:text-pixel-blue transition-all">Layanan</a>
                <a href="#portofolio" class="hover:text-pixel-blue transition-all">Portofolio</a>
                <a href="#testimoni" class="hover:text-pixel-blue transition-all">Testimoni</a>
                <a href="#kontak"
                    class="bg-pixel-blue text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
                    Konsultasi Gratis
                </a>
            </div>

            <button id="mobile-menu-button" class="md:hidden text-gray-700">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>

        <div id="mobile-menu" class="md:hidden hidden bg-white px-6 py-4 space-y-4">
            <a href="#layanan" class="block py-2 hover:text-pixel-blue">Layanan</a>
            <a href="#portofolio" class="block py-2 hover:text-pixel-blue">Portofolio</a>
            <a href="#testimoni" class="block py-2 hover:text-pixel-blue">Testimoni</a>
            <a href="#kontak"
                class="inline-block mt-2 bg-pixel-blue text-white px-5 py-2 rounded-full hover:bg-blue-600">
                Konsultasi Gratis
            </a>
        </div>
    </nav>
    `
}
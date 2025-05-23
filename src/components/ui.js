export function Card(logo, title, text) {
    return `
         <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div class="p-6">
                <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-pixel-blue mb-4">
                    <i class="fas ${logo} text-2xl"></i>
                </div>
                <h3 class="font-bold text-xl mb-3">${title}</h3>
                <p class="text-gray-600">
                    ${text}
                </p>
            </div>
        </div>
    `;
};

export function Project(source, title, text) {
    return `
        <div class="portfolio-item relative rounded-xl overflow-hidden group">
            <img 
                src="${source}" 
                alt="${title}"
                class="w-full h-64 object-cover">
            <div
                class="portfolio-overlay absolute inset-0 bg-pixel-blue/80 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <div class="text-center text-white p-6">
                    <h3 class="font-bold text-xl mb-2">${title}</h3>
                    <p class="mb-4">${text}y</p>
                </div>
            </div>
        </div>
    `;
};

export function Testimoni(source, name, pos, text) {
    return `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                        src="${source}" 
                        alt="${name}"
                        class="w-full h-full object-cover">
                </div>
                <div>
                    <h4 class="font-bold">${name}</h4>
                    <p class="text-gray-600 text-sm">${pos}</p>
                </div>
            </div>
            <p class="text-gray-700">
                "${text}"
            </p>
            <div class="mt-4 text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
    `;
};

export const HandleFunction = () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 10) {
            nav.classList.add('shadow-lg');
            nav.classList.remove('bg-white/80');
            nav.classList.add('bg-white');
        } else {
            nav.classList.remove('shadow-lg');
            nav.classList.add('bg-white/80');
            nav.classList.remove('bg-white');
        }
    });
}
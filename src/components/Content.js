import { Card, Project, Testimoni } from "./ui";

export default function Content() {
    return `
    <section 
        id="home"
        class="relative overflow-hidden bg-gradient-to-r from-pixel-blue to-blue-600 text-white py-20 md:py-28 px-4">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div class="container mx-auto relative z-10 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
                <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Desain Digital <span class="text-blue-200">Berkualitas</span> untuk Bisnis Modern
                </h1>
                <p class="text-xl mb-8 text-blue-100 max-w-lg">
                    Transformasi ide Anda menjadi desain UI/UX yang memukau dan fungsional.
                </p>
                <div class="flex space-x-4">
                    <a href="#kontak"
                        class="bg-white text-pixel-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                        Mulai Projek
                    </a>
                    <a href="#portofolio"
                        class="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                        Lihat Portofolio
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <div class="mockup-3d bg-white p-2 rounded-xl w-full max-w-md">
                    <img src="https://media.istockphoto.com/id/1567381587/id/foto/ikon-chatbot-pada-latar-belakang-biru-futuristik-digital-ilustrasi-3d-dengan-warna-warna-cerah.jpg?b=1&s=612x612&w=0&k=20&c=T6IqREcxsipLECMTtjqQX0-Qlhg1DBaWfCIH5vGuVh0="
                        alt="Mockup Desain" class="rounded-lg w-full">
                </div>
            </div>
        </div>
    </section>

    <section id="layanan" class="py-16 px-4 container mx-auto">
        <div class="text-center mb-16">
            <span class="text-pixel-blue font-bold">LAYANAN KAMI</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-2">Solusi Desain Digital</h2>
            <p class="text-gray-600 max-w-2xl mx-auto mt-4">
                Kami menawarkan berbagai layanan untuk membantu bisnis Anda tumbuh di era digital.
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${
                Card("fa-mobile-screen", "UI/UX Aplikasi", "Desain aplikasi mobile & web yang user-friendly dan estetik.")
            }

            ${
                Card("fa-laptop-code", "Website Responsif", "Website yang indah dan berfungsi sempurna di semua perangkat.")
            }

            ${
                Card("fa-paint-roller", "Redesign Produk", "Revitalisasi desain lama Anda menjadi lebih modern.")
            }

            ${
                Card("fa-palette", "Branding Visual", "Identitas visual yang kuat untuk membedakan bisnis Anda.")
            }
        </div>
    </section>

    <section id="portofolio" class="py-16 bg-white px-4">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <span class="text-pixel-blue font-bold">PORTOFOLIO</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2">Karya Terbaru Kami</h2>
                <p class="text-gray-600 max-w-2xl mx-auto mt-4">
                    Beberapa proyek terbaik yang telah kami selesaikan untuk klien.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${
                    Project(
                        "https://images.pexels.com/photos/7534804/pexels-photo-7534804.jpeg?auto=compress&cs=tinysrgb&w=600", 
                        "Aplikasi Fintech", 
                        "Desain UI/UX untuk startup payment gateway"
                    )
                }
                ${
                    Project(
                        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600", 
                        "Website E-Commerce", 
                        "Platform penjualan online untuk UMKM"
                    )
                }
                ${
                    Project(
                        "https://media.istockphoto.com/id/2159593332/id/foto/close-up-of-businessman-using-a-laptop-with-graphs-and-charts-on-a-laptop-computer.jpg?b=1&s=612x612&w=0&k=20&c=3olbvsdrVjI-15Gic_b54qjYk2UtE4MyA5RqE6Dki80=",
                        "Admin Dashboard",
                        "Sistem manajemen konten perusahaan"
                    )
                }
            </div>
        </div>
    </section>

    <section id="testimoni" class="py-16 bg-gray-50 px-4">
        <div class="container mx-auto">
            <div class="text-center mb-16">
                <span class="text-pixel-blue font-bold">TESTIMONI</span>
                <h2 class="text-3xl md:text-4xl font-bold mt-2">Apa Kata Klien Kami?</h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${
                    Testimoni(
                        "https://randomuser.me/api/portraits/women/32.jpg",
                        "Sarah Wijaya",
                        "CEO Fintech Startup",
                        "Desain dari PixelFrame sangat meningkatkan engagement pengguna kami. Tim profesional dan sangat responsive!"
                    )
                }
                ${
                    Testimoni(
                        "https://randomuser.me/api/portraits/men/45.jpg",
                        "Budi Santoso",
                        "Pemilik UMKM",
                        "Website baru kami mendapatkan banyak pujian dari pelanggan. Proses pengerjaan cepat dan hasil memuaskan."                    
                    )
                }
                ${
                    Testimoni(
                        "https://randomuser.me/api/portraits/women/68.jpg",
                        "Dewi Lestari",
                        "Product Manager",
                        "Revisi fleksibel dan desainnya sangat detail. Sangat merekomendasikan PixelFrame untuk kebutuhan UI/UX."
                    )
                }
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-pixel-blue to-blue-600 text-white px-4">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Diskusikan proyek Anda dengan tim kami dan dapatkan solusi terbaik.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://wa.me/6281234567890"
                    class="bg-white text-pixel-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <i class="fab fa-whatsapp text-xl"></i>
                    <span>Hubungi via WhatsApp</span>
                </a>
                <a href="mailto:contact@pixelframe.id"
                    class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                    <i class="far fa-envelope text-xl"></i>
                    <span>Kirim Email</span>
                </a>
            </div>
        </div>
    </section>
    `;
};
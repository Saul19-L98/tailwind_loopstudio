// Desktop
import dCuriosity from '../assets/images/desktop/image-curiosity.jpg';
import dDeepEarth from '../assets/images/desktop/image-deep-earth.jpg';
import dFisheye from '../assets/images/desktop/image-fisheye.jpg';
import dFromAbove from '../assets/images/desktop/image-from-above.jpg';
import dGrid from '../assets/images/desktop/image-grid.jpg';
import dInteractive from '../assets/images/desktop/image-interactive.jpg';
import dNightArcade from '../assets/images/desktop/image-night-arcade.jpg';
import dPocketBorealis from '../assets/images/desktop/image-pocket-borealis.jpg';
import dSoccerTeam from '../assets/images/desktop/image-soccer-team.jpg';

// Mobile
import mCuriosity from '../assets/images/mobile/image-curiosity-m.jpg';
import mDeepEarth from '../assets/images/mobile/image-deep-earth-m.jpg';
import mFisheye from '../assets/images/mobile/image-fisheye-m.jpg';
import mFromAbove from '../assets/images/mobile/image-from-above-m.jpg';
import mGrid from '../assets/images/mobile/image-grid-m.jpg';
import mInteractive from '../assets/images/mobile/image-interactive-m.jpg';
import mNightArcade from '../assets/images/mobile/image-night-arcade-m.jpg';
import mPocketBorealis from '../assets/images/mobile/image-pocket-borealis-m.jpg';
import mSoccerTeam from '../assets/images/mobile/image-soccer-team-m.jpg';

// Icons
import iFacebook from '../assets/images/icon-facebook.svg';
import iInstagram from '../assets/images/icon-instagram.svg';
import iPinterest from '../assets/images/icon-pinterest.svg';
import iTwitter from '../assets/images/icon-twitter.svg';
import iLogo from '../assets/images/logo.svg';
import iGithub from '../assets/images/icon-github.svg';

export const templateView = () => {
    const view = `
    <!-- Hero Section -->
    <section id="hero">
        <!-- Hero Container -->
        <div class="container max-w-6xl mx-auto px-6 py-12">
            <!-- Nav/Logo Cotainer -->
            <nav class="flex items-center justify-between font-bold text-white">
                <!-- Logo -->
                <img src="${iLogo}" alt="#">
                <!-- Menu -->
                <div class="hidden h-10 font-alata md:flex md:space-x-8">
                    <div class="group">
                        <a href="#">About</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div class="group">
                        <a href="#">Careers</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div class="group">
                        <a href="#">Events</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div class="group">
                        <a href="#">Products</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                    <div class="group">
                        <a href="#">Support</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>
                <!-- Hamburger Button -->
                <div class="md:hidden">
                    <button
                    id="menu-btn"
                    type="button"
                    class="z-40 block hamburger md:hidden focus:outline-none">
                        <span class="hamburger-top"></span>
                        <span class="hamburger-middle"></span>
                        <span class="hamburger-bottom"></span>
                    </button>
                </div>
            </nav>
        
            <div class="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:mx-0 md:text-6xl">
                Impressive Experiences Thaht Deliver
            </div>

            <!-- Mobile Menu -->
            <div id="menu" class="hidden absolute top-0 bottom-0 left-0 flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
                <a href="#" class="hover:text-pink-500">About</a>
                <a href="#" class="hover:text-pink-500">Careers</a>
                <a href="#" class="hover:text-pink-500">Events</a>
                <a href="#" class="hover:text-pink-500">Products</a>
                <a href="#" class="hover:text-pink-500">Support</a>
            </div>

        </div>
    </section>

    <!-- Feature Section -->
    <section id="feature">
        <div class="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
            <!-- Image -->

            <!-- Desktop Image -->
            <img src="${dInteractive}" alt="#" class="hidden md:block">

            <!-- Mobile Image -->
            <img src="${mInteractive}" alt="#" class="md:hidden">

            <!-- Text Container -->
            <div class="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                <h2 class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase mx-auto md:text-5xl md:mt-0 md:text-left md:mx-0">
                    The leader in interactive VR
                </h2>
                <p class="max-w-md mx-auto text-center md:mx-0 md:text-left">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </div>
    </section>

    <!-- Creation Section -->
    <section id="creations">
        <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
            <!-- Creations Header -->
            <div class="flex justify-center mb-20 md:justify-between">
                <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">
                    Our Creations
                </h2>

                <button class="hidden btn md:block">
                    See All
                </button>
            </div>

            <!-- Items Container 1 -->
            <div class="item-container">
                <!-- Item 1 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dDeepEarth}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mDeepEarth}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5 class="">Deep Earth</h5>
                </div>

                <!-- Item 2 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dNightArcade}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mNightArcade}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>Night Arcade</h5>
                </div>

                <!-- Item 3 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dSoccerTeam}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mSoccerTeam}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>Soccer Team VR</h5>
                </div>

                <!-- Item 4 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dGrid}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mGrid}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>The Grid</h5>
                </div>
            </div>
            <!-- Items Container 2 -->
            <div class="item-container mt-10">
                <!-- Item 5 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dFromAbove}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mFromAbove}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5 class="">From Up Above VR</h5>
                </div>

                <!-- Item 6 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dPocketBorealis}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mPocketBorealis}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>Pocket Borealis</h5>
                </div>

                <!-- Item 7 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dCuriosity}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mCuriosity}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>The curiosity</h5>
                </div>

                <!-- Item 8 -->
                <div class="group item">

                    <!-- Desktop Image -->
                    <img src="${dFisheye}" alt="#" class="hidden w-full duration-200 md:block group-hover:scale-110">

                    <!-- Mobile Image -->
                    <img src="${mFisheye}" alt="#" class=" w-full md:hidden">

                    <!-- Item Gradient -->
                    <div class="item-gradient"></div>

                    <!-- Item Text -->
                    <h5>Make It Fisheye</h5>
                </div>
            </div>

            <!-- Bottom Button Container -->
            <div class="flex justify-center mt-10 md:hidden">
                <button class="btn w-full md:hidden">
                    See All
                </button>
            </div>
        </div>
    </section>

    <footer class="bg-black">
        <!-- Container -->
        <div class="container max-w-6xl py-10 mx-auto">
            <!-- Footer flex Container -->
            <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:spacey-0 md:justify-between md:items-start">
                <!-- Menu & Logo Container -->
                <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                    <!-- Logo -->
                    <div class="h-8">
                        <img src="${iLogo}" alt="#" class="w-44 md:ml-3">
                    </div>
                    <!-- Menu -->
                    <div class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                        <!-- Item 1 -->
                        <div class="h-10 group">
                            <a href="#">About</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <!-- Item 2 -->
                        <div class="h-10 group">
                            <a href="#">Carrers</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <!-- Item 3 -->
                        <div class="h-10 group">
                            <a href="#">Events</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <!-- Item 4 -->
                        <div class="h-10 group">
                            <a href="#">Products</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                        <!-- Item 5 -->
                        <div class="h-10 group">
                            <a href="#">Support</a>
                            <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                        </div>
                    </div>
                </div>

                <!-- Social & Copy Container -->
                <div class="flex flex-col items-start justify-between space-y-4 text-gray-500 md:pr-4">
                    <!-- Icons Container -->
                    <div class="flex items-center justify-center space-x-4 mx-auto md:justify-end md:mx-0">
                        <!-- Icon 1 -->
                        <div class="h-8 group">
                            <a href="https://github.com/Saul19-L98/tailwind_loopstudio" target="_blank" rel="noopener noreferrer">
                                <img src="${iGithub}" alt="#" class="h-6">
                            </a>
                        </div>
                        <!-- Icon 2 -->
                        <div class="h-8 group">
                            <a href="#">
                                <img src="${iTwitter}" alt="#" class="h-6">
                            </a>
                        </div>
                        <!-- Icon 3 -->
                        <div class="h-8 group">
                            <a href="#">
                                <img src="${iPinterest}" alt="#" class="h-6">
                            </a>
                        </div>
                        <!-- Icon 4 -->
                        <div class="h-8 group">
                            <a href="#">
                                <img src="${iInstagram}" alt="#" class="h-6">
                            </a>
                        </div>
                    </div>
                    <!-- Copy -->
                    <div class="font-bold">
                        &copy; 2022 Loopstudios. All Rights Reserved.s
                    </div>
                </div>

            </div>
        </div>
    </footer>
    `;
    return view;
}
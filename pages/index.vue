<template>
    <div class="h-full flex flex-col">
        <div>
            <Navbar />
        </div>

        <div class="flex w-full">
            <div class="w-full" data-carousel-item>
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/delicious-pizza-banner-design-template-678ba6314fa1113b55bde00ccfb38bcc_screen.jpg?ts=1665562063"
                    class="object-fit w-full h-104" alt="">
            </div>
        </div>
        <div class="flex flex-col items-center mt-8">
            <h1 class="text-2xl">Our Services.</h1>
            <p class="text-5xl">How good we are.</p>
        </div>

        <div class="flex justify-center mt-8 ">
            <div class="grid grid-cols-3 gap-6 w-full max-w-5xl">
                <div class=" p-4 bg-white rounded shadow-md text-center cursor-pointer hover:bg-yellow-100   ">
                    <Icon name="icon-park-solid:bank-card" style="font-size: 3rem;" />

                    <h2 class="text-xl font-bold">Accept Card</h2>
                    <p> We accept cards also but only on delivery of foods.</p>


                </div>
                <div class=" cursor-pointer hover:bg-yellow-100   p-4 bg-white rounded shadow-md text-center">
                    <Icon name="ic:baseline-location-on" style="font-size: 3rem;" />

                    <h2 class="text-xl font-bold">Accessible</h2>
                    <p>We also accept the order on the food you want.</p>

                </div>
                <div class=" cursor-pointer hover:bg-yellow-100  p-4 bg-white rounded shadow-md text-center">
                    <Icon name="fluent-emoji-high-contrast:articulated-lorry" style="font-size: 3rem;" />
                    <h2 class="text-xl font-bold">Free Delivery</h2>
                    <p> Free delivery services are available only inside the valley</p>
                </div>
            </div>
        </div>

        <br><br> <br>

        <div class="flex flex-col items-center mt-8">
            <h1 class="text-2xl">LATEST BLOG..</h1>
            <p class="text-5xl">Our Yummy Story</p>
        </div>
        <div class="flex justify-center mt-8">
            <div class="grid grid-cols-2 grid-rows-2gap-6 w-full max-w-8xl">
                <div
                    class="flex items-center w-full p-4 bg-white rounded shadow-md cursor-pointer hover:bg-yellow-100 ">
                    <NuxtImg class="w-64 h-64 object-cover rounded-3xl"
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg" />
                    <div class="ml-4 text-center flex-grow">
                        <h1 class="text-2xl font-semibold">Dinner,Salad</h1>
                        <h1 class="text-gray-600 text-xl"> Most popular nd yummy fish salad for foodie.</h1>
                        <p class="text-gray-600 ">Fish Salad ingredientsand flexible when cooked and are popular illing
                            in Asian spring...</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full p-4 bg-white rounded shadow-md cursor-pointer hover:bg-yellow-100 bg-blue-200">
                    <NuxtImg class="w-64 h-64 object-cover rounded-3xl"
                        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" />
                    <div class="ml-4 text-center flex-grow">
                        <h1 class="text-2xl font-semibold">Services,Tricks</h1>
                        <h1 class="text-gray-600 text-xl"> Top three ingredients for every delicious cooking.</h1>
                        <p class="text-gray-600 ">Sppedy week nights dinner, 5 ingredient dishes,quick and easy meals.
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full p-4 bg-white rounded shadow-md cursor-pointer hover:bg-yellow-100 bg-blue-200">
                    <NuxtImg class="w-64 h-64 object-cover rounded-3xl"
                        src="https://fullofplants.com/wp-content/uploads/2020/10/vegan-vietnamese-inspired-egg-rolls-with-potato-carrot-mushrooms-cha-gio-chay-thumb-1.jpg" />
                    <div class="ml-4 text-center flex-grow">
                        <h1 class="text-2xl font-semibold">Eggs Item</h1>
                        <h1 class="text-gray-600 text-xl"> New fresh menu of spring is here.</h1>
                        <p class="text-gray-600 ">For those with pure food indulgence in mind, come next door and state
                            your desires..</p>
                    </div>
                </div>
                <div
                    class="flex items-center w-full p-4 bg-white rounded shadow-md cursor-pointer hover:bg-yellow-100 bg-blue-200">
                    <NuxtImg class="w-64 h-64 object-cover rounded-3xl"
                        src="https://i.guim.co.uk/img/media/cb683d50e1a7141d4ac294bfa80e8df8a57168b2/604_1535_2669_2669/master/2669.jpg?width=465&dpr=1&s=none" />
                    <div class="ml-4 text-center flex-grow">
                        <h1 class="text-2xl font-semibold">Pasta Primavera</h1>
                        <h1 class="text-gray-600 text-xl">A delightful blend of seasonal vegetables pasta.
                        </h1>
                        <p class="text-gray-600">Enjoy our vibrant Pasta Primavera, featuring fresh zucchini, bell
                            peppers, and cherry tomatoes, tossed in a light garlic and olive oil sauce. </p>

                    </div>
                </div>


            </div>
        </div>



        <br>
        <div class="flex flex-col items-center mt-8">
            <p class="text-5xl">Words from our team.</p>
            <br>
        </div>

        <div>
            <TeamWords />

            <Footer />

        </div>

    </div>
</template>

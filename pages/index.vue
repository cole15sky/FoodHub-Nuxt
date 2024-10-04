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
            <div class="grid grid-cols-1 grid-cols-3 gap-6 w-full max-w-5xl">
                <div class=" p-4 bg-white rounded shadow-md text-center cursor-pointer hover:bg-blue-400 bg-blue-200  ">
                    <Icon name="icon-park-solid:bank-card" style="font-size: 3rem;" />

                    <h2 class="text-xl font-bold">Accept Card</h2>
                    <p> We accept cards also but only on delivery of foods.</p>


                </div>
                <div class=" cursor-pointer hover:bg-blue-400 bg-blue-200  p-4 bg-white rounded shadow-md text-center">
                    <Icon name="ic:baseline-location-on" style="font-size: 3rem;" />

                    <h2 class="text-xl font-bold">Accessible</h2>
                    <p>We also accept the order on the food you want.</p>

                </div>
                <div class=" cursor-pointer hover:bg-blue-400 bg-blue-200  p-4 bg-white rounded shadow-md text-center">
                    <Icon name="fluent-emoji-high-contrast:articulated-lorry" style="font-size: 3rem;" />
                    <h2 class="text-xl font-bold">Free Delivery</h2>
                    <p> Free delivery services are available only inside the valley</p>
                    
                </div>
            </div>
        </div>
        <br><br><br>




        <div class="flex flex-col items-center mt-8">
            <p class="text-5xl">Words from our team.</p>
            <br>
        </div>

        <div>
            <TeamWords/>

            <Footer/>

        </div>

    </div>
</template>

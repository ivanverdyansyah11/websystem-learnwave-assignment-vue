<script setup>
    import { RouterLink } from 'vue-router';
    import Hamburger from '../components/Hamburger.vue';
</script>

<template>
    <div class="row">
        <div class="offset-lg-3 offset-xl-2 col">
            <div class="dashboard-content">
                <div class="wrapper d-flex justify-content-between align-items-center">
                    <h3 class="title mb-0">Detail Sub Module Array</h3>
                    <Hamburger/>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card-form">
                            <form class="form d-flex flex-column">
                                <div class="input-group d-flex flex-column">
                                    <label for="title">Title</label>
                                    <input readonly type="text" class="input" id="title" value="Array Concept and How To Make Array" autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="link_youtube">Link Youtube</label>
                                    <input readonly type="text" class="input" id="link_youtube" value="https://youtu.be/rnrJyN48-hk?si=1bkSZ9FGdt5bXoXa" autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="link_ebook">Link E-Book</label>
                                    <input readonly type="text" class="input" id="link_ebook" value="https://drive.google.com/file/d/1kAs_5yyDP1oLeGmfdwVcKtqHXUawySwZ/view?usp=sharing" autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="description">Description</label>
                                    <textarea readonly rows="4" class="input" id="description" autocomplete="off">Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store: string cars[4];</textarea>
                                </div>
                                <div class="button-group d-flex gap-2">
                                    <RouterLink to="/module" class="button-reverse">Back to Sub Module Page</RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
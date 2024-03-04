<script setup>
    import { RouterLink } from 'vue-router';
    import Hamburger from '../components/Hamburger.vue';
</script>

<template>
    <div class="row">
        <div class="offset-lg-3 offset-xl-2 col">
            <div class="dashboard-content">
                <div class="wrapper d-flex justify-content-between align-items-center">
                    <h3 class="title mb-0">Add Sub Module Array</h3>
                    <Hamburger/>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card-form">
                            <form class="form d-flex flex-column">
                                <div class="input-group d-flex flex-column">
                                    <label for="title">Title</label>
                                    <input required type="text" class="input" id="title" placeholder="Enter module title.." autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="link_youtube">Link Youtube</label>
                                    <input required type="text" class="input" id="link_youtube" placeholder="Enter module link youtube.." autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="link_ebook">Link E-Book</label>
                                    <input required type="text" class="input" id="link_ebook" placeholder="Enter module link ebook.." autocomplete="off">
                                </div>
                                <div class="input-group d-flex flex-column">
                                    <label for="description">Description</label>
                                    <textarea required rows="4" class="input" id="description" placeholder="Enter module description.." autocomplete="off"></textarea>
                                </div>
                                <div class="button-group d-flex gap-2">
                                    <button type="submit" class="button-primary">Save Changes</button>
                                    <RouterLink to="/module" class="button-reverse">Cancel Edit</RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { RouterLink } from 'vue-router';
    import Hamburger from '../components/Hamburger.vue';
</script>

<template>
    <div class="row">
        <div class="offset-lg-3 offset-xl-2 col">
            <div class="dashboard-content">
                <div class="wrapper d-flex justify-content-between align-items-center">
                    <h3 class="title mb-0">Edit Agenda</h3>
                    <Hamburger/>
                </div>
                <div class="row">
                    <div class="col-12">
                        <form class="form d-flex flex-column card-form">
                            <div class="input-group d-flex flex-column position-relative">
                                <label for="thumbnail_agenda">Thumbnail Agenda</label>
                                <img src="/src/assets/images/other/img-not-found.jpg" alt="Image Not Found" class="tag-image mb-2 rounded" width="100" height="100" style="object-fit: cover;">
                                <label for="thumbnail_agenda" class="input button-file">Choose Thumbnail Agenda</label>
                                <input required type="file" class="input input-hide input-image" id="thumbnail_agenda">
                            </div>
                            <div class="input-group d-flex flex-column">
                                <label for="title">Title</label>
                                <input required type="text" class="input" id="title" placeholder="Enter module title.." autocomplete="off">
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
</template>
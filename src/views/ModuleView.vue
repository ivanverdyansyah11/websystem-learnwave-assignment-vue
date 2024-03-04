<script setup>
    import { RouterLink } from 'vue-router';
    import Hamburger from '../components/Hamburger.vue';
    import ModuleModal from '../components/ModuleModal.vue'
</script>

<template>
    <div class="row">
      <div class="offset-lg-3 offset-xl-2 col">
          <div class="dashboard-content">
              <div class="wrapper d-flex justify-content-between align-items-center">
                  <h3 class="title mb-0">Array Module</h3>
                  <RouterLink to="/agenda/edit/1" class="button-primary d-none d-lg-inline-block">Edit Agenda</RouterLink>
                  <Hamburger />
              </div>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                  <div class="col mb-4">
                      <RouterLink to="/sub-module" class="card-menu-dashboard">
                          <h6 class="card-menu-title">Array 1 Dimensional</h6>
                          <div class="button-action d-flex">
                              <button type="button" class="detail-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#detailModuleModal">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </button>
                              <button type="button" class="edit-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#editModuleModal">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </button>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </RouterLink>
                  </div>
                  <div class="col mb-4">
                      <RouterLink to="/sub-module" class="card-menu-dashboard">
                          <h6 class="card-menu-title">Multidimensional Arrays</h6>
                          <div class="button-action d-flex">
                              <button type="button" class="detail-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#detailModuleModal">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </button>
                              <button type="button" class="edit-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#editModuleModal">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </button>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </RouterLink>
                  </div>
                  <div class="col mb-4">
                      <button type="button" class="card-menu-dashboard card-menu-dashboard-add" data-bs-toggle="modal" data-bs-target="#addModuleModal">
                          <div class="wrapper-content">
                              <img src="/src/assets/images/icon/plus.png" alt="Plus Icon" width="32">
                              <p class="card-menu-caption">Add New Module</p>
                          </div>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <ModuleModal />
</template>
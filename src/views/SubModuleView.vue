<script setup>
    import { RouterLink } from 'vue-router';
    import Hamburger from '../components/Hamburger.vue';
    import SubModuleModal from '../components/SubModuleModal.vue';
</script>

<template>
  <div class="row">
      <div class="offset-lg-3 offset-xl-2 col">
          <div class="dashboard-content">
              <div class="wrapper d-flex justify-content-between align-items-center">
                  <h3 class="title mb-0">Array 1 Dimensional Module</h3>
                  <Hamburger/>
              </div>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">Introduction</h6>
                          <p class="card-menu-paragraph">An array is a fundamental data structure in computer programming that allows the storage of multiple elements of the same data type under a single variable name. It provides a systematic way to organize and access these elements using indices, making it a versatile tool for handling collections of data in various algorithms and applications.</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">How To Make Array</h6>
                          <p class="card-menu-paragraph">The array is a crucial concept in computer programming, representing a sequential collection of elements, each identified by an index or a key. To create an array, programmers allocate memory for a specific number of elements, assign values to each element, and use indexing to efficiently access and manipulate the stored data within the program.</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">How to get array data?</h6>
                          <p class="card-menu-paragraph">In C++, you can access data from an array by using array indexing. The syntax involves specifying the array name followed by square brackets containing the index of the desired element. For example:</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">How to set value in array?</h6>
                          <p class="card-menu-paragraph">To set a value in an array, you use the array index to identify the position where you want to assign a new value. Here's how you can do it in C++:</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">How to show array data using looping?</h6>
                          <p class="card-menu-paragraph">You can display array data using a loop to iterate through each element and print its value. Here's an example in C++:</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">How to get array length?</h6>
                          <p class="card-menu-paragraph">In C++, if you have an array and you want to find its length, you can use the sizeof operator. However, it's important to note that sizeof returns the size in bytes, so you need to divide it by the size of one element to get the number of elements in the array. Here's an example:</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <div class="card-menu-dashboard">
                          <h6 class="card-menu-title">Mini Project 1</h6>
                          <p class="card-menu-paragraph">Calculate the Average Number (Menghitung rata-rata bilangan)</p>
                          <div class="button-action d-flex">
                              <RouterLink to="/sub-module/detail/1" class="detail-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/detail.svg" alt="Detail Icon" width="15">
                              </RouterLink>
                              <RouterLink to="/sub-module/edit/1" class="edit-button d-flex align-items-center justify-content-center">
                                  <img src="/src/assets/images/icon/edit.svg" alt="Edit Icon" width="15">
                              </RouterLink>
                              <button type="button" class="delete-button d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#deleteSubModuleModal">
                                  <img src="/src/assets/images/icon/delete.svg" alt="Delete Icon" width="15">
                              </button>
                          </div>
                      </div>
                  </div>
                  <div class="col mb-4">
                      <RouterLink to="/sub-module/create" class="d-flex align-items-center justify-content-center card-menu-dashboard text-center">
                          <div class="wrapper-content">
                              <img src="/src/assets/images/icon/plus.png" alt="Plus Icon" width="32">
                              <p class="card-menu-caption">Add New Sub Module</p>
                          </div>
                      </RouterLink>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <SubModuleModal />
</template>
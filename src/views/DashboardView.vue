<script setup>
    import Hamburger from '../components/Hamburger.vue'
</script>

<template>
    <div class="row">
        <div class="offset-lg-3 offset-xl-2 col">
            <div class="dashboard-content">
                <div class="wrapper d-flex justify-content-between align-items-center">
                    <h3 class="title mb-0">Dashboard Page</h3>
                    <Hamburger />
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                    <div class="col">
                        <div class="card-menu-dashboard d-flex">
                            <div class="wrapper-icon d-flex justify-content-center align-items-center">
                                <img src="/src/assets/images/dashboard/module.png" alt="Dashboard Menu Icon" width="18">
                            </div>
                            <div class="wrapper mb-0">
                                <p class="menu-caption">Total Module</p>
                                <h4 class="menu-value">08</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4 mt-md-0">
                        <div class="card-menu-dashboard d-flex">
                            <div class="wrapper-icon d-flex justify-content-center align-items-center">
                                <img src="/src/assets/images/dashboard/sub-module.png" alt="Dashboard Menu Icon" width="18">
                            </div>
                            <div class="wrapper mb-0">
                                <p class="menu-caption">Total Sub Module</p>
                                <h4 class="menu-value">124</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4 mt-xl-0">
                        <div class="card-menu-dashboard d-flex">
                            <div class="wrapper-icon d-flex justify-content-center align-items-center">
                                <img src="/src/assets/images/dashboard/user-register.png" alt="Dashboard Menu Icon" width="18">
                            </div>
                            <div class="wrapper mb-0">
                                <p class="menu-caption">User Register</p>
                                <h4 class="menu-value">130</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col mt-4 mt-xl-0">
                        <div class="card-menu-dashboard d-flex">
                            <div class="wrapper-icon d-flex justify-content-center align-items-center">
                                <img src="/src/assets/images/dashboard/staff-management.png" alt="Dashboard Menu Icon" width="18">
                            </div>
                            <div class="wrapper mb-0">
                                <p class="menu-caption">Staff Management</p>
                                <h4 class="menu-value">02</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<template>
  <div class="modal fade" id="deleteSubModuleModal" tabindex="-1" aria-labelledby="deleteSubModuleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal-title d-flex align-items-center justify-content-between">
                    <h2 class="title">Delete Sub Module</h2>
                    <button type="button" class="button-exit" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/src/assets/images/icon/exit.svg" alt="Exit Icon" width="16">
                    </button>
                </div>
                <form class="form d-flex flex-column">
                    <p class="paragraph">Confirm Sub Module Deletion: Are you sure you want to delete this sub module? This action cannot be undone, and the sub module will be permanently removed from the system.</p>
                    <div class="button-group d-flex gap-2">
                        <button type="submit" class="button-primary">Delete Sub Module</button>
                        <button type="button" class="button-reverse" data-bs-dismiss="modal" aria-label="Close">Cancel Delete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>

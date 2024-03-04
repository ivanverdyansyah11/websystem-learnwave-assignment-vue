<template>
  <div class="modal fade" id="addModuleModal" tabindex="-1" aria-labelledby="addModuleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="modal-title d-flex align-items-center justify-content-between">
                      <h2 class="title">Add New Module</h2>
                      <button type="button" class="button-exit" data-bs-dismiss="modal" aria-label="Close">
                          <img src="/src/assets/images/icon/exit.svg" alt="Exit Icon" width="16">
                      </button>
                  </div>
                  <form class="form d-flex flex-column">
                      <div class="input-group d-flex flex-column">
                          <label for="title">Title</label>
                          <input required type="text" class="input" id="title" placeholder="Enter module title.." autocomplete="off">
                      </div>
                      <div class="button-group d-flex gap-2">
                          <button type="submit" class="button-primary">Add New Module</button>
                          <button type="button" class="button-reverse" data-bs-dismiss="modal" aria-label="Close">Cancel Add</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>

  <div class="modal fade" id="detailModuleModal" tabindex="-1" aria-labelledby="detailModuleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="modal-title d-flex align-items-center justify-content-between">
                      <h2 class="title">Detail Module</h2>
                      <button type="button" class="button-exit" data-bs-dismiss="modal" aria-label="Close">
                          <img src="/src/assets/images/icon/exit.svg" alt="Exit Icon" width="16">
                      </button>
                  </div>
                  <form class="form d-flex flex-column">
                      <div class="input-group d-flex flex-column">
                          <label for="title">Title</label>
                          <input readonly type="text" class="input" id="title" value="Array 1 Dimensional" autocomplete="off">
                      </div>
                      <div class="button-group d-flex gap-2">
                          <button type="button" class="button-reverse" data-bs-dismiss="modal" aria-label="Close">Close Modal Module</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>

  <div class="modal fade" id="editModuleModal" tabindex="-1" aria-labelledby="editModuleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="modal-title d-flex align-items-center justify-content-between">
                      <h2 class="title">Edit Module</h2>
                      <button type="button" class="button-exit" data-bs-dismiss="modal" aria-label="Close">
                          <img src="/src/assets/images/icon/exit.svg" alt="Exit Icon" width="16">
                      </button>
                  </div>
                  <form class="form d-flex flex-column">
                      <div class="input-group d-flex flex-column">
                          <label for="title">Title</label>
                          <input required type="text" class="input" id="title" value="Array 1 Dimensional" autocomplete="off">
                      </div>
                      <div class="button-group d-flex gap-2">
                          <button type="submit" class="button-primary">Save Changes</button>
                          <button type="button" class="button-reverse" data-bs-dismiss="modal" aria-label="Close">Cancel Edit</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>

  <div class="modal fade" id="deleteModuleModal" tabindex="-1" aria-labelledby="deleteModuleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-body">
                  <div class="modal-title d-flex align-items-center justify-content-between">
                      <h2 class="title">Delete Module</h2>
                      <button type="button" class="button-exit" data-bs-dismiss="modal" aria-label="Close">
                          <img src="/src/assets/images/icon/exit.svg" alt="Exit Icon" width="16">
                      </button>
                  </div>
                  <form class="form d-flex flex-column">
                      <p class="paragraph">Confirm Module Deletion: Are you sure you want to delete this module? This action cannot be undone, and the module will be permanently removed from the system.</p>
                      <div class="button-group d-flex gap-2">
                          <button type="submit" class="button-primary">Delete Module</button>
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

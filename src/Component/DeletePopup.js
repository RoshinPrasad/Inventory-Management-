const DeletePopup = () => {
  return (
    <div
      class="swal2-container swal2-center swal2-backdrop-show" >
      <div
        aria-labelledby="swal2-title"
        aria-describedby="swal2-content"
        class="swal2-popup swal2-modal swal2-show"
        tabindex="-1"
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{display: "flex"}}
      >
        <div class="swal2-header">
          <h2 class="swal2-title" id="swal2-title"  style={{display: "flex"}}>
            Are you sure?
          </h2>
        </div>
        <div class="swal2-content">
        <div id="swal2-content" class="swal2-html-container" style={{display: "block"}}>You won't be able to revert this!</div>
        </div>
        <div class="swal2-actions">
          <div class="swal2-loader"></div>
          <button
            type="button"
            class="swal2-confirm btn btn-primary"
            aria-label=""
            style={{display: "inline-block"}}
          >
            Yes, delete it!
          </button>
          <button
            type="button"
            class="swal2-cancel btn btn-danger ml-1"
            aria-label=""
            style={{display: "inline-block"}}
          >
            Cancel
          </button>
        </div>
        <div class="swal2-timer-progress-bar-container">
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

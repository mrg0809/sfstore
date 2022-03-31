function ImageModal({foto }) {
    return (
        <div class="modal">
            <div class="modal-background"></div>
                <div class="modal-content">
                    <p class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""> </img>
                    </p>
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
      );
    };


export default ImageModal;
const emptyHeart = document.querySelector(".like-glyph");
const fullHeart = document.querySelector(".like-glyph.activated-heart");
const modal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");

emptyHeart.addEventListener("click", function() {
  mimicServerCall()
    .then(function(response) {
      // handle successful response
      emptyHeart.classList.add("hidden");
      fullHeart.classList.remove("hidden");
      fullHeart.classList.add("activated-heart");
    })
    .catch(function(error) {
      // handle failed response
      modal.classList.remove("hidden");
      modalMessage.textContent = error;
      setTimeout(function() {
        modal.classList.add("hidden");
      }, 3000);
    });
});

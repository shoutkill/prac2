let container = document.querySelector(".container");
let songsContainer = container.querySelector(".songs-container");
let songs = songsContainer.querySelectorAll('.song');
let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");





function addSong() {

    songsContainer.insertAdjacentHTML('beforeend', `
      <div class="song">
        <h4 class="song__artist">Кино</h4>
        <p class="song__title">Дерево</p>
        <button class="song__like"></button>
      </div>
    `);

    renderAdded();

}

addButton.addEventListener("click", addSong);





function renderAdded() {
    let songs = songsContainer.querySelectorAll('.song');
    let noSongsElement = container.querySelector(".no-songs");

    if (songs.length === 0) {
        resetButton.setAttribute("disabled", true);
        resetButton.classList.add("form__submit-btn_disabled");
        noSongsElement.classList.remove("no-songs_hidden");
    } else {
        resetButton.removeAttribute("disabled");
        resetButton.classList.remove("form__submit-btn_disabled");
        noSongsElement.classList.add("no-songs_hidden");
    }
}
addButton.addEventListener("click", addSong);

renderAdded();









function resetPlaylist() {
    let noSongsElement = container.querySelector(".no-songs");
    songsContainer.innerHTML = "";
    if (songs.length === 0) {
        noSongsElement.classList.remove("no-songs_hidden");
        resetButton.setAttribute("disabled", true);
        resetButton.classList.add("form__submit-btn_disabled");
    } else {
        noSongsElement.classList.add("no-songs_hidden");
        resetButton.classList.remove("form__submit-btn_disabled");
        noSongsElement.classList.add("no-songs_hidden");
    }
}
resetButton.addEventListener("click", resetPlaylist);
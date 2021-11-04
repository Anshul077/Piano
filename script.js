let noteElement = new Audio("notes/1.mp3");

function getId(e) {
  let noteId = e.id;
  master = document.getElementById(`${noteId}`);

  master.addEventListener("click", () => {
    noteElement.src = `notes/${noteId}.mp3`;
    console.log(noteElement.src);

    var playPromise = noteElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          noteElement.currentTime = 0;
          noteElement.play();

          master.classList.add("active");
          setTimeout(() => {
              master.classList.remove("active")
            }, 0100);
        })
        .catch((error) => {});
    }
  });
}

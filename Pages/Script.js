function drumKit(buttonId, audioId) {

    const button = document.getElementById(buttonId);
    const audio = document.getElementById(audioId);

    button.addEventListener("click", () => {
        audio.play();
    });
}

drumKit('play1', 'audio1');
drumKit('play2', 'audio2');
drumKit('play3', 'audio3');
drumKit('play4', 'audio4');
drumKit('play5', 'audio5');
drumKit('play6', 'audio6');
drumKit('play7', 'audio7');
drumKit('play8', 'audio8');
drumKit('play9', 'audio9');
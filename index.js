var firstWords = ["SPECTRUM", "SONIC", "SERENE", "SHADE", "SURREAL",
    "SPECTRAL", "SUBLIME", "SUBTLE", "SKYLINE", "SAPPHIRE", "SPARKLING",
    "SILKEN", "SWAYING", "SPELLBINDING", "STELLAR", "SUNDOWN", "SWIRLING",
    "SPIRITUAL", "SYMPHONY", "SUBLIME"];

var secondWords = ["SPEAKS", "SYMPHONIES", "STORIES", "SERENADES", "SAGAS",
    "SILHOUETTES", "SPECTACLES", "SONNETS", "SOLILOQUIES", "SCRIPTS",
    "SENTIMENTS", "SONORITIES", "SERENDIPITIES", "SPECTRUMS", "SYNCHRONY",
    "SERENITY", "SILHOUETTES", "SPOKENNESS", "SHADES", "SUNSETS", "SCRIPTURES"];

var wordElement = document.querySelector("#word");

wordElement.addEventListener("click", function () {
    var newWord = getRandomElement(firstWords) + " " + getRandomElement(secondWords);
    wordElement.textContent = newWord;
});

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


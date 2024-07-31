console.log("Let's get this party started!");

$(document).ready(function () {
    const $gifContainer = $("#gif-container");
    const $gifForm = $("#gif-form");
    const $searchTerm = $("#search-term");

    $gifForm.on("submit", async function (e) {
        e.preventDefault();

        let searchTerm = $searchTerm.val();
        $searchTerm.val("");

        const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
            params: {
                q: searchTerm,
                api_key: "V2jvQ966PCnskTU2cFwizguo781LKsIw", 
            }
        });

        appendGif(response.data);
    });

    $("#remove-gifs").on("click", function () {
        $gifContainer.empty();
    });

    function appendGif(res) {
        if (res.data.length > 0) {
            const gifUrl = res.data[0].images.original.url;
            const $newGif = $("<img>", { src: gifUrl, alt: "GIF" });
            $gifContainer.append($newGif);
        }
    }
});

console.log("Let's get this party started!");
document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
        params: {
            q: searchTerm,
            api_key: 'YOUR_API_KEY_HERE',
            limit: 1
        }
    });

    const gifUrl = response.data.data[0].images.fixed_height.url;
    const img = document.createElement('img');
    img.src = gifUrl;
    document.getElementById('gifContainer').appendChild(img);
});

document.getElementById('removeGifs').addEventListener('click', function() {
    document.getElementById('gifContainer').innerHTML = '';
});
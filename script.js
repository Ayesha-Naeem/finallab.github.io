function displayNews(data) {
    const newsContainer = document.getElementById("root");
    newsContainer.innerHTML = ''; // Clear the container before adding new news cards

    // Create a row element for the news cards
    const row = document.createElement("div");
    row.className = "w3-row";

    // Loop through the news articles and create news cards
    data.articles.forEach((news, index) => {
        if (index % 2 === 0) {
            // Create a column element for each news card
            const column = document.createElement("div");
            column.className = "w3-half w3-padding";

            // Create the news card
            const card = document.createElement("div");
            card.className = "news-card-item";

            // Create and set the image element
            const image = document.createElement("img");
            image.className = "news-card-image";
            image.src = news.urlToImage;
            image.alt = news.title;

            // Create and set the title element
            const title = document.createElement("h3");
            title.className = "news-card-title";
            title.textContent = news.title;

            // Create and set the description element
            const description = document.createElement("p");
            description.className = "news-card-description";
            description.textContent = news.description;

            // Append the image, title, and description to the news card
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);

            // Append the news card to the column
            column.appendChild(card);

            // Append the column to the row
            row.appendChild(column);
        }
    });

    // Append the row to the news container
    newsContainer.appendChild(row);
}

// Function to fetch news from the News API
function fetchNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f7d54802ae9d4e2eb6b90d6e456b63ee`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            displayNews(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Call the fetchNews function to load news when the page loads
fetchNews();

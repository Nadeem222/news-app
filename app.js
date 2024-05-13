const apiKey = '894dc4d3c91145d983237f08763a6495';
const baseUrl = 'https://newsapi.org/v2/everything';

const fetchNews = async (keyword) => {
    try {
        const response = await fetch(`${baseUrl}?q=${encodeURIComponent(keyword)}&apiKey=${apiKey}`);
        const data = await response.json();
        console.log(data)
        return data.articles; // Extract the articles array from the response
    } catch (error) {
        console.error('Error fetching news data:', error);
        return []; // Return an empty array if there's an error
    }
};

// Function to render news articles on the web page
const renderNews = async () => {
    const newsContainer = document.getElementById('news-container');

    // Clear any existing content in the news container
    newsContainer.innerHTML = '';

    // Fetch news data
    const articles = await fetchNews("pakistan");

    // Render each news article
    articles.forEach(article => {
        
        console.log(article.title);
        newsContainer.innerHTML += `
        <div >
            <a href="${article.url}"  target="_blank"><img src="${article.urlToImage}" alt=""></a>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        </div>
        `

    });
};

// Call renderNews function when the page loads
window.onload = renderNews;

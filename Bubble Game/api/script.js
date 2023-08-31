const quoteText = document.getElementById('quote-text');
const newQuoteButton = document.getElementById('new-quote');

// Function to fetch a random quote from an external API
async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        quoteText.textContent = data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.textContent = 'An error occurred while fetching the quote.';
    }
}

// Event listener for the "New Quote" button
newQuoteButton.addEventListener('click', getQuote);

// Initial fetch when the page loads
getQuote();

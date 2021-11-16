# [Chuck Norris Jokes Web-Scraper](https://edrdmolina.github.io/Chuck-Norris-Jokes/)

### All jokes were scraped from: https://deadliestjokes.fandom.com/wiki/Chuck_Norris


Using Axios i retrieved all data from the above url.

I parsed through the Data collecting all jokes and storing them inside of the jokes.json file. There I corrected all spelling mistakes.

Once all data was saved in the jokes.json file I set up an [Express JS API](https://github.com/edrdmolina/Multipurpose-ExpressJS) route to serve random jokes.


The purpose of doing this was to:
1. Learn how to perform a web scrape.
2. Use the data collected to create a [Chuck Norris Joke generator](https://edrdmolina.github.io/Chuck-Norris-Jokes/).
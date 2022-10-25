# Health website

## About
This is a personal project to summarise health advice in a simple web application. Online health advice can be overwhelming and inconsistent. News organisations often give an incomplete picture, as they prioritise surprising, trendy or counter-intutitive findings. While good advice can be found online, it can be difficult or time-consuming to find. 

The current content is a placeholder only and is intended to be indicative of the type of content on the site.

![Screenshot of the website](https://github.com/WorcestershireSource/healthweb/blob/main/static/screenshot.jpeg)
*Image: Screenshot of the website homepage*

## Structure
The site uses the Flask framework with Javascript logic in the front end to ensure a responsive user experience. The user can apply filters to show sub-sets of the data. The website uses the Bootstrap framework to enable mobile responsive design. 

## Information flow
The health advice is stored in a JSON file which is passed to the frontend by the Python application. 
The JSON data is embedded as a hidden input element in the HTML index file. 
Javascript takes the data and renders the advice on screen. 
When filters are changed and submitted, Javascript will filter the data and rerender the index page. 

## Backlog issues
- Improve mobile responsive display.
- Turn the checklist on the 'about' page into an interactive quiz.
- Improve content and seek professional input and review.
- Add additional topics.



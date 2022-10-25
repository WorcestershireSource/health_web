### Health website

## About
This is a personal project to summarise health advice in a simple web application. The health advice is not reliable. Online health advice can be overwhelming and inconsistent. News organisations often give an incomplete picture, as they prioritise surprising, trendy or counter-intutitive findings. While the information exists online, it can be difficult or time-consuming to find. 

![Screenshot of the website](https://github/worcestershiresource/healthweb/blob/main/screenshot.jpg?raw=true)


## Structure
The web application uses the Flask framework with Javascript logic in the front end to ensure a responsive user experience. The health advice is stored in a JSON file which is passed to the application which renders it on screen. The user can apply filters which are implemented in JS. 

The website uses the Bootstrap framework to enable mobile responsive design. 

## Categories for advice
The following categories are used to rank each item of advice. 

Essential           Tick symbol
Try to do it        
Can't hurt          Neutral symbol
Probably fine       
Waste of time
Bad for you         Stop symbol

## Categories for evidence assessment
The following categories are used to assess the evidence supporting each item of advice. 
Clear               Plus symbol 
Mostly clear
Mixed               Question mark symbol
Controversial       Exclamation mark 
No evidence         

## Bootstrap icon resources used in the site
Stop symbol             <i class=`bi bi-sign-stop-fill`></i>
Question mark symbol    <i class=`bi bi-question-square-fill`></i>
Tick symbol             <i class=`bi bi-check-square-fill`></i>
Neutral symbol          <i class=`bi bi-dash-square-fill`></i>
Exclamation mark symbol <i class=`bi bi-exclamation-square-fill`></i>
Plus symbol             <i class=`bi bi-plus-square-fill`></i>
Info symbol             <i class=`bi bi-info-square-fill`></i>
X symbol                <i class=`bi bi-x-square-fill`></i>


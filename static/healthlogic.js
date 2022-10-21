
// When the page is opened, automatically call on the function to populate the page with the full set of content
document.addEventListener('DOMContentLoaded', function() {
    populate_page(get_full_list())
});

// Gets the full list of content from the Json file passed from python app and embedded as a hidden input in the html
function get_full_list() {
    // Get the input data from the JSON file
    let text = document.querySelector('#data').value.replaceAll("'", "\"").replaceAll("`", "\'");
    let healthJson = JSON.parse(text);
    return healthJson
}

// Called when user submits an update to the filters on the page 
function filter_list() {
    // Check which categories have been selected
    let categories = document.getElementsByClassName('categorySelector');
    let checkedCategories = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].checked) {
            checkedCategories.push(categories[i].value);
        }
    }
    // Make a filtered version of the content which matches filters
    let original_list = get_full_list();
    let amended_list = [];
    for (let i = 0; i < original_list["sections"].length; i++) {
        outerloop: for (let j = 0; j < original_list["sections"][i]["categories"].length; j++) {
            for (let x = 0; x < checkedCategories.length; x++) {
                if (checkedCategories[x] == original_list["sections"][i]["categories"][j]) {
                    amended_list.push(original_list["sections"][i]);
                    break outerloop;
                }
            }
        }
    }

    // Check which importance assessments have been selected
    let assessment = document.getElementsByClassName('assessSelector')
    let checkedAssessment = []
    for (let i = 0; i < assessment.length; i++) {
        if (assessment[i].checked) {
            checkedAssessment.push(assessment[i].value);
        }
    }

    // Make a filtered version of the content which matches filters
    let final_list = {"sections": []}
    outerloop: for (let i = 0; i < amended_list.length; i++) {
        for (let x = 0; x < checkedAssessment.length; x++) {
            if (checkedAssessment[x] == amended_list[i]["importance"][0]) {
                final_list["sections"].push(amended_list[i])
                continue outerloop;
            }
        }
    }

    // Remove the existing content from the page and repopulate with filtered data
    document.querySelector('#nav_items').innerHTML = ""
    document.querySelector('#main_content').innerHTML = ""
    populate_page(final_list)
}


// Used to populate the page with content - input determines what content is shown on screen
function populate_page(healthJson) {

    // Populate the list of links on the lhs
    for (let i = 0; i < healthJson["sections"].length; i++) {
        var nav_item = document.createElement("div");
        nav_item.innerHTML = `
            <a class="btn btn-link-success border-0 py-1" href="#mainBox${healthJson["sections"][i]["id"]}"> 
                ${healthJson["sections"][i]["emoji"]} - ${healthJson["sections"][i]["title"]}
            </a>`;
        document.querySelector('#nav_items').append(nav_item);


        // Create each of the info boxes in the main list
        var content_item = document.createElement("div");
        content_item.innerHTML = `
            <div class="bg-light p-2 my-2 mx-3 rounded">
                
            <div class="row"> 
                    <div class="col d-flex">
                        <h5 id="mainBox${healthJson["sections"][i]["id"]}"><strong> ${healthJson["sections"][i]["title"]} </strong></h5> 
                    </div>
                    <div class="col d-flex justify-content-end mb-2">
                        <h5>Benefits: ${healthJson["sections"][i]["importance"][1]}</h5> 
                        <h5 class="mx-3">Evidence: ${healthJson["sections"][i]["evidence"][1]}</h5>
                    </div>
                </div>
            
                <p> ${healthJson["sections"][i]["summary"]} </p>

                <p><strong>Key recommendations</strong></p>
                <ul id="recommendations${healthJson["sections"][i]["id"]}"></ul>
                

                <div class="d-flex flex-row"> 
                    <button class="btn btn-outline-success btn-sm mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTips${healthJson["sections"][i]["id"]}">See more >></button>
                </div>
                <div class="collapse my-2" id="collapseTips${healthJson["sections"][i]["id"]}">
                    <div class="card card-body">
                        <p><strong> Tips </strong></p>
                        <ul id="tips${healthJson["sections"][i]["id"]}"></ul>
                        <p><strong>Evidence</strong></p>
                        <ul id="sources${healthJson["sections"][i]["id"]}"></ul>
                    </div>
                </div>


            </div>
        `;
        document.querySelector('#main_content').append(content_item);

        // Populate the recommendations, sources and tips for each box
        for (let j = 0; j < healthJson["sections"][i]["recommendations"].length; j++) {
            var liRecs = document.createElement("li");
            liRecs.innerHTML = `${healthJson["sections"][i]["recommendations"][j]}`;
            document.querySelector(`#recommendations${healthJson["sections"][i]["id"]}`).append(liRecs);
        }

        for (let j = 0; j < healthJson["sections"][i]["sources"].length; j++) {
            var liSource = document.createElement("li");
            liSource.innerHTML = `${healthJson["sections"][i]["sources"][j]}`;
            document.querySelector(`#sources${healthJson["sections"][i]["id"]}`).append(liSource);
        }

        for (let j = 0; j < healthJson["sections"][i]["tips"].length; j++) {
            var liTips = document.createElement("li");
            liTips.innerHTML = `${healthJson["sections"][i]["tips"][j]}`;
            document.querySelector(`#tips${healthJson["sections"][i]["id"]}`).append(liTips);
        }
    }
};







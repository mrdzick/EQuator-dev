import "./element.js";

const searchElement = document.querySelector('nav-bar');

const getData = () => {
    fetch(`${process.env.API_URL}/neo/rest/v1/feed?start_date=${searchElement.startDateValue}&end_date=${searchElement.endDateValue}&api_key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(response => {
            const nearEarthObject = response.near_earth_objects;
            let dates = '';
            Object.keys(nearEarthObject).forEach(neo => {
                dates += `
                                    <div class="date-list">
                                                <button class="btn btn-light btn-outline-info date-button" type="button" data-date="${neo}">
                                                ${neo}
                                                </button>
                                    </div>
                                `;
            });
            const displayResults = document.querySelector('display-results');
            displayResults.dateResults.innerHTML = dates;

            const dateButton = document.querySelectorAll('.date-button');
            dateButton.forEach(btn => {
                btn.addEventListener('click', function() {
                    dateButton.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const dateOfData = this.dataset.date;
                    let cards = '';
                    nearEarthObject[dateOfData].forEach(dod => {
                        cards += `  <div class="col-sm-6">
                                        <div class="card-body">
                                        <h5 class="card-title">${dod.name}</h5>
                                        <ul class="list-group">
                                            <li class="list-group-item">Diameter(km) : ${dod.estimated_diameter.kilometers.estimated_diameter_min} - ${dod.estimated_diameter.kilometers.estimated_diameter_max}</li>
                                            <li class="list-group-item">Kecepatan(km/s) : ${dod.close_approach_data[0].relative_velocity.kilometers_per_second}</li>
                                            <li class="list-group-item">Jarak dari Bumi(km) : ${dod.close_approach_data[0].miss_distance.kilometers}</li>
                                            <li class="list-group-item">Berpotensi berbahaya bagi Bumi : ${dod.is_potentially_hazardous_asteroid ? `<b class="text-danger">Ya</b>` : `<b class="text-success">Tidak</b>`}</li>
                                        </div>
                                    </div>`;
                    });
                    displayResults.dataAsteroid.innerHTML = cards;
                })
            })
        })
        .catch(error => console.log(error));
}

export {getData, searchElement}

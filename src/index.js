import '../css/style.scss';
import {getData, searchElement} from './data.js';


getData()

const calculateDate = () => {
    
    const parseDate = input => {
        // Transform date from text to date
        const parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    }

    const date1 = parseDate(searchElement.startDateValue);
    const date2 = parseDate(searchElement.endDateValue);
    const diff = date2 - date1 ; 
    const date_difference=parseInt(diff /(24*3600*1000));
    return date_difference;
}

const validationDate = () => {
    const sumOfDay = calculateDate();
    if (sumOfDay > 7) {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="modal fade" id="alert-date" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Perhatian!</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body bg-danger">
                                Kami hanya menampilkan maksimal 7 hari dari tanggal awal !  
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                            </div>
                            </div>
                        </div>
                        </div>`
        document.body.appendChild(div);
        searchElement.searchButton.setAttribute("data-toggle", "modal");
        searchElement.searchButton.setAttribute("data-target", "#alert-date");
    } else {
        getData();
    }
}

searchElement.searchEvent = validationDate;
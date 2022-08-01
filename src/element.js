class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set searchEvent(event) {
        this._searchEvent = event;
        this.render();
    }

    get startDateValue() {
        return this.querySelector('.start-date').value;
    }

    get endDateValue() {
        return this.querySelector('.end-date').value;
    }

    get searchButton() {
        return this.querySelector('.search');
    }

    render() {
        this.innerHTML = `<nav class="navbar navbar-dark bg-dark fixed-top">
                            <span class="navbar-brand mb-0 h1" id="brand">EQuator</span>
                            <form>
                                <div class="form-row input-date">
                                <div class="col">
                                    <input type="text" class="form-control start-date" placeholder="Tanggal Awal" onfocus="(this.type='date')" onblur="(this.type='text')">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control end-date" placeholder="Tanggal Akhir" onfocus="(this.type='date')" onblur="(this.type='text')">
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-primary search">Cari</button>
                                </div>
                                </div>
                            </form>
                        </nav>`;
        this.querySelector('.search').addEventListener('click', this._searchEvent);
    }
 }

 customElements.define("nav-bar", NavBar);

 class JumbotronBoard extends HTMLElement {
     connectedCallback() {
         this.render();
     }

     render() {
         this.innerHTML = `<div class="jumbotron jumbotron-fluid info">
                            <div class="container">
                                <div class="row">
                                    <div class="col quote">
                                    <h5><b>Adakah Asteroid yang akan menabrak mu ?</b></h5>
                                    <h3><b>CARI TAHU SEKARANG !!</b></h3>
                                    <p>Disini kamu bisa tahu batuan langit yang mendekati bumi dan pengaruhnya terhadap bumi.</p>
                                    <p>Dengan EQuator kamu bisa tahu Asteroid terdekat dari bumi dengan hanya memasukkan tanggal awal sampai maksimal 7 hari setelahnya.</p>
                                    </div>
                                    <div class="col image">
                                    <img src= "img/space.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>`;
     }
 }

 customElements.define("jumbotron-board", JumbotronBoard);

 class DisplayResults extends HTMLElement {
     connectedCallback() {
         this.render();
     }

     get dateResults() {
         return this.querySelector('.date-results');
     }

     get dataAsteroid() {
         return this.querySelector('.data-asteroid');
     }

     render() {
         this.innerHTML = `<div class="container">
                            <div class="row">
                                <div class="date-results col-sm-4"></div>
                                <div class="col-sm-8">
                                    <div class="data-asteroid card-group"></div>
                                </div>
                            </div>
                        </div>`;
     }
 }
 
customElements.define("display-results", DisplayResults);




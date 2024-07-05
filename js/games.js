import { Details } from "./details.js";
import { display } from "./show.js";
export class Games {
    constructor(){
        this.getdata('MMORPG');
        document.querySelectorAll('.nav-link').forEach((element) => {
            element.addEventListener('click', (e) => {
                document.querySelector(".active").classList.remove("active");
                e.target.classList.add('active');
                const category = e.target.getAttribute('data');
                this.getdata(category);
            });
        });
        this.ui = new display()
    }
    async getdata(category){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '99409a0ff6msh6cbebc539622d95p1d0365jsn4d66491d0b62',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.ui.displaycard(result)
            this.startEvent();
        } catch (error) {
            console.error(error);
        }
    }
    startEvent() {
        document.querySelectorAll(".cardd").forEach((item) => {
        item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.showDetails(id)
        });
        });
    }
    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".detalis").classList.remove("d-none");
    }
}


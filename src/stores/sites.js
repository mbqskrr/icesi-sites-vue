import { defineStore } from "pinia";
export const useSiteStore = defineStore("sites", {
    state: () => ({
        sites: localStorage.getItem("sites") ? JSON.parse(localStorage.getItem("sites")) : [
            {
                image: "./src/assets/sites/mb.jpg",
                name: "Martin Birreria",
                description: "Comida mexicana",
                price: "$$",
            },
            {
                image: "./src/assets/sites/th.jpg",
                name: "Turk House NYC",
                description: "Comida rápida americana",
                price: "$$$"
            },
            {
                image: "./src/assets/sites/ldm.png",
                name: "Lengua de Mariposa",
                description: "Heladería con sabores únicos",
                price: "$$"
            },
        ],
    }),
    getters: {
        getSites: (state) => [...state.sites],
    },
    actions: {
        newSite(site) {
            this.sites=[...this.sites, site]
            localStorage.setItem('sites', JSON.stringify(this.sites))
        },
        loadSites() {
            this.localStorageSites = JSON.parse(localStorage.getItem('sites'))
        },
        getSiteById(id) {
            const filteredSites = this.sites.filter((site) => id.toLowerCase() === site.name.toLowerCase());
            return filteredSites ? {...filteredSites[0]} : null
        },
    },
});
import { observable, computed } from "mobx";
import Cookies from "js-cookie";
import axios from "axios";

import Directus from "./lib/directus/Directus.js";

export default class Store {

  @observable pageTitle  = "Syndesi Blog";
  @observable lang       = "en";
  @observable directus   = null;
  @observable loaded     = false;
  @observable cites      = [];
  @observable d          = null;

  constructor(){
    this.loadLanguage();
    this.loaded = true;
    this.cites = [
      {
        type: "web",
        title: "titanium - definition of titanium in English",
        url: "https://en.oxforddictionaries.com/definition/titanium",
        created: "2017",
        authors: [
          {
            name: "Oxford Dictionaries"
          }
        ]
      },
      {
        type: "web",
        title: "Atomic weights of the elements 2013 (IUPAC Technical Report)",
        url: "https://en.wikipedia.org/wiki/Pure_and_Applied_Chemistry",
        created: "2016",
        authors: [
          {
            name: "Meija, J."
          }
        ]
      },
      {
        type: "web",
        title: "Emission spectra of TiH and TiD near 938 nm",
        url: "http://bernath.uwaterloo.ca/media/257.pdf",
        created: "2003",
        authors: [
          {
            name: "Andersson, N."
          }
        ]
      },
      {
        type: "web",
        title: "CRC, Handbook of Chemistry and Physics",
        url: "https://en.wikipedia.org/wiki/Special:BookSources/0-8493-0464-4",
        created: "1984",
        authors: [
          {
            name: "Weast"
          },
          {
            name: "Robert"
          }
        ]
      },
      {
        type: "web",
        title: "Pitting Corrosion of Titanium",
        url: "http://www.dtic.mil/get-tr-doc/pdf?AD=ADA274980",
        created: "1994",
        authors: [
          {
            name: "Casillas, N."
          },
          {
            name: "Charlebois, S."
          },
          {
            name: "Smyrl, W. H."
          },
          {
            name: "White, H. S."
          },
        ]
      },
      {
        type: "web",
        title: "Effects of Metal Chemistry on Behavior of Titanium in Industrial Applications",
        url: "https://books.google.com/books?id=0Adr4zleybgC&pg=PA112",
        created: "1981",
        authors: [
          {
            name: "Forrest, A. L."
          }
        ]
      },
      {
        type: "web",
        title: "Bioinorganic Chemistry of Titanium",
        url: "https://doi.org/10.1021%2Fcr1002886",
        created: "2012",
        authors: [
          {
            name: "Buettner, K. M."
          },
          {
            name: "Valentine, A. M."
          }
        ]
      }
    ];
    this.directus = new Directus("https://api.syndesi.dev/_/");
  }

  /**
   * Returns the preffered language
   * If possible, from cookie. Otherwise from browser-environment or default.
   * @returns string
   */
  loadLanguage(){
    var lang = (!!Cookies.get("lang") && Cookies.get("lang")) ||
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      "en";
    this.lang = lang;
  }

}
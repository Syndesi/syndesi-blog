import axios from "axios";

export default class Story {

  d = null;

  constructor(directus) {
    this.d = directus;
  }

  async getStory(id, languageCode){
    let d = this.d;
    try {
      let res = await axios.get(d.baseUrl + 'items/story_translation?single=1&fields=*.*,story.created_by.*&filter[story][eq]='+id+'&filter[language.code][eq]='+languageCode);
      return res.data.data;
    } catch (e) {
      return false;
    }
  }

  async getLatestStories(languageCode){
    let d = this.d;
    try {
      let res = await axios.get(d.baseUrl + 'items/story_translation?sort=created_on&fields=*.*,story.created_by.*&filter[language.code][eq]='+languageCode);
      return res.data.data;
    } catch (e) {
      return false;
    }
  }

}
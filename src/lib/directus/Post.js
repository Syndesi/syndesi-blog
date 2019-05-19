import axios from "axios";

export default class Post {

  d = null;

  constructor(directus) {
    this.d = directus;
  }

  async getPost(id, languageCode){
    let d = this.d;
    try {
      //let res = await axios.get(d.baseUrl + 'items/post/'+id+'?fields=*,created_by.*,tag.tag');
      let res = await axios.get(d.baseUrl + 'items/post_translation?single=1&fields=*.*,post_id.*,post_id.created_by.*,post_id.tag.tag&filter[post_id][eq]='+id+'&filter[language.code][eq]='+languageCode);
      return res.data.data;
    } catch (e) {
      return false;
    }
  }

  async getLatestPosts(languageCode){
    let d = this.d;
    try {
      let res = await axios.get(d.baseUrl + 'items/post_translation?sort=created_on&fields=*.*,post_id.*,post_id.created_by.*,post_id.tag.tag&filter[language.code][eq]='+languageCode);
      return res.data.data;
    } catch (e) {
      return false;
    }
  }

}
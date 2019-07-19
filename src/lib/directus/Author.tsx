

export default class Author {

  d = null;

  constructor(directus) {
    this.d = directus;
  }

  getAuthorObject(data, languageCode){
    return {
      name: '',
      url: this.getAuthorUrl(data, languageCode)
    };
  }

  /**
   * Returns the relative URL to the author's page. Relative to react-router's basepath.
   * @param authorObject The author/user-object returned by the Directus-API
   * @param languageCode Two letter language code, e.g. "en"
   * @returns {*}
   */
  getAuthorUrl(authorObject, languageCode){
    if(!authorObject || !authorObject.id || !authorObject.last_name){
      return null;
    }
    let url = '/' +languageCode + '/author/' + authorObject.id + '-' + authorObject.last_name;
    return url.toLowerCase();
  }

}
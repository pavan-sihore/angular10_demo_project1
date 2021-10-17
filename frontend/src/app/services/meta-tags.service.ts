import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root'})
export class MetaTagsService {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { }

  setMetaTags(data){
    this.titleService.setTitle((data.title)?data.title:'');
    this.meta.addTags([
      {name: 'keywords', content: (data.keyword)?data.keyword:''},
      {name: 'description', content: (data.description)?data.description:''},
      {name: 'author', content: (data.author)?data.author:''},
      {name: 'robots', content: (data.robots)?data.robots:''}//index, follow
    ]);
  }

  updateTitleTag(title: string){
    if(title!=""){
      this.titleService.setTitle(title);
    }    
  }

  updateKeywordTag(keyword: string){
    if(keyword!=""){
      this.meta.updateTag({name: 'keywords', content: keyword});
    }    
  }

  updateDescriptionTag(description: string){
    if(description!=""){
      this.meta.updateTag({name: 'description', content: description});
    }
  }

  updateRobotsTag(robots: string){
    if(robots!=""){
      this.meta.updateTag({name: 'robots', content: robots});
    }
  }

}//end MeataTagsService calss
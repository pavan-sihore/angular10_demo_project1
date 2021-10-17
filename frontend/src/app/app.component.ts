import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { MetaTagsService } from './services/meta-tags.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hostEnv = environment.envName;
  private metaTags = {'title':'Home | Welcome','keyword':'','description':'','author':'','robots':''};

  constructor(private _MetaTagsService: MetaTagsService) { }

  ngOnInit() {
    this._MetaTagsService.setMetaTags(this.metaTags);
  }

}

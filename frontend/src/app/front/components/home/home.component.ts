import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from '../../../services/meta-tags.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private metaTitle = "Home";

  constructor(private _MetaTagsService: MetaTagsService) { }

  ngOnInit(): void {
    this._MetaTagsService.updateTitleTag(this.metaTitle);
  }

}

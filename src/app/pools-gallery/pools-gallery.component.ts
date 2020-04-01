import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'pools-gallery',
  templateUrl: './pools-gallery.component.html',
  styleUrls: ['./pools-gallery.component.scss']
})
export class PoolsGalleryComponent {
  albums = [];
  
  constructor(private lightbox: Lightbox) {
    this.albums = [
      { src: "assets/pools/Pool_1.jpg" },
      { src: "assets/pools/Pool_2.jpg" },
      { src: "assets/pools/Pool_3.jpg" },
      { src: "assets/pools/Pool_4.jpg" },
      { src: "assets/pools/Pool_5.jpg" },
      { src: "assets/pools/Pool_6.jpg" },
      { src: "assets/pools/Pool_7.jpg" },
      { src: "assets/pools/Pool_8.jpg" },
      { src: "assets/pools/Pool_9.jpg" },
      { src: "assets/pools/Pool_10.jpg" },
      { src: "assets/pools/Pool_11.jpg" }
    ]
  }

  open(index) {
    this.lightbox.open(this.albums, index);
  }

}

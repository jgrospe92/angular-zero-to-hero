import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IImage } from 'src/app/models/image.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.scss']
})
export class ImageListingComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Image List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage:boolean = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }

  filteredImages: IImage[] = [];
  images: IImage[] = [];

  constructor(private imageService: ImageService){}

  ngOnInit(): void {
    this.sub = this.imageService.getImages().subscribe({
      next: images => {
        this.images = images;
        this.filteredImages = this.images;
      },
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
 

  performFilter(filterBy: string): IImage[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.images.filter((image: IImage) => 
    image.name.toLocaleLowerCase().includes(filterBy))
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Image List: ' + message;
  }

}

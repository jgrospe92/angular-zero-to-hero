import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IImage } from 'src/app/models/image.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  pageTitle = 'Product Details';
  errorMessage = '';
  image: IImage | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imageService: ImageService) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getImage(id);
    }
  }

  getImage(id: number): void {
    this.imageService.getImage(id).subscribe({
      next: image => this.image = image,
      error: err => this.errorMessage = err
    })
  }

  onBack(): void {
    this.router.navigate(['/images'])
  }

}

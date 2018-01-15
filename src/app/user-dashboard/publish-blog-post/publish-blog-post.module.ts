import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { PublishBlogPostRoutesModule} from './publish-blog-post-router.module';
import { PublishBlogPostComponent } from './publish-blog-post.component';

@NgModule({
  imports: [
    CommonModule,
    PublishBlogPostRoutesModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PublishBlogPostComponent
  ]
})
export class PublishBlogPostModule { }

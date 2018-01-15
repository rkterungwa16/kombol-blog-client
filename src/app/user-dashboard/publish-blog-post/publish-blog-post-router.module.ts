import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishBlogPostComponent } from './publish-blog-post.component';

const routes: Routes = [
  { path: 'publish', component: PublishBlogPostComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PublishBlogPostRoutesModule { }

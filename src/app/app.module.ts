import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { StoriesComponent } from "./stories/stories.component";
import { FooterComponent } from "./footer/footer.component";
import { ItemComponent } from "./item/item.component";
import { HNAPIService } from "./hn-api.service";
import { HttpClientModule } from "@angular/common/http";
import { DomainPipe } from "./domain.pipe";
import { MomentModule } from "ngx-moment";
import { LoadingComponent } from "./loading/loading.component";
import { ItemCommentsComponent } from "./item-comments/item-comments.component";
import { CommentTreeComponent } from "./comment-tree/comment-tree.component";
import { CommentComponent } from "./comment/comment.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    LoadingComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent
  ],
  imports: [BrowserModule, MomentModule, HttpClientModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [HNAPIService],
  bootstrap: [AppComponent]
})
export class AppModule {}

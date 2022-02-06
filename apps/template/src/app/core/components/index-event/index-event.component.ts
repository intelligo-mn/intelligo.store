import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-index-event',
  templateUrl: './index-event.component.html',
  styleUrls: ['./index-event.component.css']
})

/**
 * Event Component
 */
export class IndexEventComponent implements OnInit {

  /**
   * Nav Light Class Add
   */
  navClass = 'nav-light';

  constructor(private modalService: NgbModal) { }

  /**
   * Review Testimonial Data
   */
   reviewData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Thomas Israel ",
      designation: "C.E.O",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Carl Oliver",
      designation: "P.A",
      message: `" The advantage of its Latin origin and the relative meaninglessness
      of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention
      from the layout. "`
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Barbara McIntosh",
      designation: "M.D",
      message: `" There is now an abundance of readable dummy texts. These are
      usually used when a text is required purely to fill a space. These alternatives to the classic Lorem
      Ipsum texts are often amusing and tell short, funny or nonsensical stories. "`
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Christa Smith",
      designation: "Manager",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text
      composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling
      all the instances of the unusual word 'consectetur' he could find "`
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have
      originated in the 16th century. "`
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: `" It seems that only fragments of the original text remain in the
      Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added
      or deleted at various positions within the text. "`
    }
  ];

  /**
   * Blog Data
   */
   blogData = [
    {
      image: "assets/images/event/b01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/event/b02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/event/b03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];

  private _diff: number | undefined;
  _days: number | undefined;
  _hours: number | undefined;
  _minutes: number | undefined;
  _seconds: number | undefined;
  private _trialEndsAt: any;

  ngOnInit(): void {
    this._trialEndsAt = "2022-12-25";
    //Day Counter
    interval(1000).pipe(
      map((x) => {
        this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  /***
   * Get day
   */
  getDays(t: any) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /***
   * Get Hours
   */
  getHours(t: any) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /***
   * Get Minutes
   */
  getMinutes(t: any) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /***
   * Get Secounds
   */
  getSeconds(t: any) {
    return Math.floor((t / 1000) % 60);
  }

}

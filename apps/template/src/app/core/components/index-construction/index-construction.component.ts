import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-construction",
  templateUrl: "./index-construction.component.html",
  styleUrls: ["./index-construction.component.css"],
})

/***
 * Construction Component
 */
export class IndexConstructionComponent implements OnInit {
  /***
   * Nav Bg Light class add
   */
  navClass = "nav-light";

  /***
   * Filter Tab
   */
  filterredImages;
  galleryFilter = "all";
  images = [
    {
      image: "assets/images/construction/o1.jpg",
      category: "offices",
      text: "Iphone mockup",
      sub_text: "offices",
    },
    {
      image: "assets/images/construction/b1.jpg",
      category: "buildings",
      text: "Mockup Collection",
      sub_text: "offices",
    },
    {
      image: "assets/images/construction/r1.jpg",
      category: "roads",
      text: "Abstract images",
      sub_text: "Abstract",
    },
    {
      image: "assets/images/construction/b2.jpg",
      category: "buildings",
      text: "Yellow bg with Books",
      sub_text: "Books",
    },
    {
      image: "assets/images/construction/r2.jpg",
      category: "roads",
      text: "Company V-card",
      sub_text: "V-card",
    },
    {
      image: "assets/images/construction/o2.jpg",
      category: "offices",
      text: "Mockup box with paints",
      sub_text: "Photography",
    },
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/construction/o1.jpg",
      title: "High quality work for demand our customer.",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/construction/b1.jpg",
      title: "Building public support for a severige work bond",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/construction/r1.jpg",
      title: "Satisfection for the customer our first parity.",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];


  constructor(private modalService: NgbModal, private router: Router) {
    /***
     * Set Color css
     */
    let path = this.router.url.split("-")[1];
    if (path == "construction") {
      document
        .getElementById("color-opt")
        .setAttribute("href", "assets/css/colors/yellow.css");
    }
  }

  ngOnInit(): void {
    this.filterredImages = this.images;
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }

  ngOnDestroy() {
    document.getElementById("color-opt").setAttribute("href", "assets/css/colors/default.css");
  }

  /***
   * Filter Active Class Add
   */
  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === "all") {
      this.filterredImages = this.images;
    } else {
      this.filterredImages = this.images.filter(
        (x) => x.category === this.galleryFilter
      );
    }
  }
}

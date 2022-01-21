import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-cases",
  templateUrl: "./page-cases.component.html",
  styleUrls: ["./page-cases.component.css"],
})

/**
 * Page Cases Component
 */
export class PageCasesComponent implements OnInit {

  /**
   * Nav Light Class Add
   */
  navClass = "nav-light";
  filterredImages;
  galleryFilter = "all";

  caseList = [
    {
      image: "assets/images/work/1.jpg",
      title: "200% Extended Facebook Reach",
      variant: "primary",
      type: "business",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/2.jpg",
      title: "SEO Success For Insulation",
      variant: "warning",
      type: "marketing",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/3.jpg",
      title: "Mobile-Friendly Campaigns",
      variant: "success",
      type: "finance",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/4.jpg",
      title: "HVAC SEO Campaign",
      variant: "info",
      type: "HR",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/5.jpg",
      title: "Social Media & Small Business",
      variant: "primary",
      type: "business",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/6.jpg",
      title: "PPC Success For HVAC Company",
      variant: "warning",
      type: "marketing",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/7.jpg",
      title: "Ecommerce PPC Case Studys",
      variant: "success",
      type: "finance",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/8.jpg",
      title: "Iphone mockup",
      variant: "info",
      type: "HR",
      content: "This is required when, for example, the final text is not yet available."
    },
    {
      image: "assets/images/work/9.jpg",
      title: "Iphone mockup",
      variant: "info",
      type: "HR",
      content: "This is required when, for example, the final text is not yet available."
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.filterredImages = this.caseList;
  }

  /**
   * Filtering All Record Get
   */
  activeCategory(category) {
    this.galleryFilter = category;
    if (this.galleryFilter === "all") {
      this.filterredImages = this.caseList;
    } else {
      this.filterredImages = this.caseList.filter(
        (x) => x.type === this.galleryFilter
      );
    }
  }

}

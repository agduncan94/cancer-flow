import { Component, OnInit } from '@angular/core';
import { VariantService } from '../variant.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.css']
})
export class VariantComponent implements OnInit {
  geneId = null;
  variantId = null;
  variant = null;

  constructor(private variantService: VariantService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.geneId = +this.route.snapshot.paramMap.get('id');
    this.variantId = +this.route.snapshot.paramMap.get('variant');
    this.getVariant(this.variantId);
  }

  getVariant(variantId) {
    this.variantService.getVariant(variantId)
      .subscribe(variant => this.variant = variant);
  }

}

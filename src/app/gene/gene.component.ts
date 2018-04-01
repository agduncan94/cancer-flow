import { Component, OnInit } from '@angular/core';
import { GeneService } from '../gene.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {
  gene = null;

  constructor(private geneService: GeneService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getGene(id);
  }

  getGene(gene) {
    this.geneService.getGene(gene)
      .subscribe(gene => this.gene = gene);
  }

}

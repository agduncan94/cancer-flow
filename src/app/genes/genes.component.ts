import { Component, OnInit } from '@angular/core';
import { GeneService } from '../gene.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.css']
})
export class GenesComponent implements OnInit {
  genes = {}

  constructor(private geneService: GeneService, private router: Router) { }

  ngOnInit() {
    this.getGenes();
  }

  getGenes() {
    this.geneService.getGenes()
      .subscribe(genes => this.genes = genes);
  }

  goToGene(gene) {
    this.router.navigate(["/genes/" + gene]);
  }

}

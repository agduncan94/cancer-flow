import { Component, OnInit } from '@angular/core';
import { GeneService } from '../gene.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.css']
})
export class GenesComponent implements OnInit {
  genes = null;
  baseGenes = "https://civicdb.org/api/genes";

  constructor(private geneService: GeneService, private router: Router) { }

  ngOnInit() {
    this.getGenes(this.baseGenes);
  }

  getGenes(geneUrl) {
    this.geneService.getGenes(geneUrl)
      .subscribe(genes => this.genes = genes);
  }

  goToGene(gene) {
    this.router.navigate(["/genes/" + gene]);
  }

}

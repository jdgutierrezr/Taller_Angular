import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { CommonModule } from '@angular/common';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
  imports: [CommonModule]
})
export class SerieComponent implements OnInit 
{
  series: Array<Serie> = [];
  average: number = 0;
  selectedSerie: Serie | null = null;

  constructor( private serieService: SerieService ){}

  getSeries( ) 
  {
    this.serieService.getSeries( ).subscribe( series => {
      this.series = series;
      this.getSeasonsAverage( );
    });
  }

  getSeasonsAverage( )
  {
    let totalSeasons: number = 0;

    this.series.forEach( (serie) => totalSeasons = totalSeasons + serie.seasons );

    this.average = totalSeasons / this.series.length;
  }

  ngOnInit( ) 
  {
    this.getSeries( );
  }
}

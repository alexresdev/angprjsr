import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test', 
    'https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_960_720.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test', 
    'https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

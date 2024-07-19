import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any[] = [];
  filteredList: any[] = [];
  searchData: string = '';
  selectedFilter: string = 'All';

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getAllRecepies().subscribe((res: any) => {
      this.list = res.recipes;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredList = this.list.filter(item => {
      const matchesSearch = (item.name.trim().toLowerCase() + item.cuisine.trim().toLowerCase()).includes(this.searchData.trim().toLowerCase())
      const matchesFilter = this.selectedFilter === 'All' || item.mealType.includes(this.selectedFilter);
      return matchesFilter && matchesSearch;
    });
  }

  setSearchData(value: string): void {
    this.searchData = value;
    this.applyFilters();
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 > 0 ? 1 : 0;
    const stars = [...Array(fullStars).fill('full'), ...Array(halfStars).fill('half')];
    return stars;
  }
}


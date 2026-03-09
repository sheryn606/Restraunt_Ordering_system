import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="item">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <h3>₹{{ item.price }}</h3>
    </div>
  `
})
export class MenuDetailComponent implements OnInit {

  item?: MenuItem;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.menuService.getMenu().subscribe(menu => {
      this.item = menu.find(m => m.id === id);
    });
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ProjectList } from '@app-data/project-list';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'description', 'status', 'createdOn', 'closedOn'];
  public dataSource = new MatTableDataSource(ProjectList);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

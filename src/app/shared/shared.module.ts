import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { RouterModule } from '@angular/router';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  // other modules
  RouterModule
];

@NgModule({
  declarations: [IssueListComponent],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules, IssueListComponent]
})
export class SharedModule {}

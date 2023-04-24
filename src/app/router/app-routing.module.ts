import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from '../components/reg/reg.component';
import { EnqListComponent } from '../components/enq-list/enq-list.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component: RegComponent},
  {path:'enq-list', component: EnqListComponent},
  {path:'user-detail', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

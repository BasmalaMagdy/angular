import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';


const routes: Routes = [
  {path: '' ,component:SendfeedbackComponent},
  {path: 'basmala' ,component:SendmessageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }

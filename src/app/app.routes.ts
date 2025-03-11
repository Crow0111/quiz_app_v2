import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SupportComponent } from './pages/support/support.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:MainComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'support',component:SupportComponent},
    

];

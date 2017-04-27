import {Routes} from '@angular/router';
import {CollectorComponent} from './collector/collector.component';
import {RatingComponent} from './rating/rating.component';
import {NotifierComponent} from './notifier/notifier.component';
import {EvidenceComponent} from './evidence/evidence.component';
import {AutopilotComponent} from './autopilot/autopilot.component';
import {AiComponent} from './ai/ai.component';
import {ReportComponent} from './report/report.component';
import {AccuracyComponent} from 'app/accuracy/accuracy.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'collector', pathMatch: 'full'},
  {path: 'collector', component: CollectorComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'notifier', component: NotifierComponent},
  {path: 'ai', component: AiComponent},
  {path: 'report', component: ReportComponent},
  {path: 'autopilot', component: AutopilotComponent},
  {path: 'evidence', component: EvidenceComponent},
  {path: 'accuracy', component: AccuracyComponent}



];


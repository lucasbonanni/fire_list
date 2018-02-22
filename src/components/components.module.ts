import { NgModule } from '@angular/core';
import { NewListComponent } from './new-list/new-list';
import { ListComponent } from './list/list';
@NgModule({
	declarations: [NewListComponent,
    ListComponent],
	imports: [],
	exports: [NewListComponent,
    ListComponent]
})
export class ComponentsModule {}

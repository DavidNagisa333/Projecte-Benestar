import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonesComponent } from './persones.component';

/*import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { EsborrarPersonaComponent } from './esborrar-persona/esborrar-persona.component';
import { LlistarPersonaComponent } from './llistar-persona/llistar-persona.component';
import { ModificarPersonaComponent } from './modificar-persona/modificar-persona.component';*/

const routes: Routes = [
/*
	{
		path: 'app-jaume-mg',
		component: JaumeMGComponent,
		children: [
			{
				path: 'app-crear-persona',
				component: CrearPersonaComponent
			},
			{
				path: 'app-esborrar-persona',
				component: EsborrarPersonaComponent
			},
			{
				path: 'app-llistar-persona',
				component: LlistarPersonaComponent
			},
			{
				path: 'app-modificar-persona',
				component: ModificarPersonaComponent
			}
		]
	}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonesRoutingModule { }

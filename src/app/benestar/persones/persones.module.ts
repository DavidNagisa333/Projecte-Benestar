import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonesRoutingModule } from './persones-routing.module';
import { PersonesComponent } from './persones.component';
//import { NgxPaginationModule } from 'ngx-pagination';

//import { JaumeMGComponent } from './jaume-mg.component';

/*import { JaumeMGRoutingModule } from './jaume-mg-routing.module';
import { LlistarPersonaComponent } from './llistar-persona/llistar-persona.component';
import { ModificarPersonaComponent } from './modificar-persona/modificar-persona.component';
import { EsborrarPersonaComponent } from './esborrar-persona/esborrar-persona.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';*/
import {PersonesComponent} from './persones.component';
@NgModule({
  imports: [
    CommonModule,
      PersonesRoutingModule
    //JaumeMGRoutingModule,
    //NgxPaginationModule
  ],
<<<<<<< HEAD
  declarations: [PersonesComponent/*JaumeMGComponent, LlistarPersonaComponent, ModificarPersonaComponent, EsborrarPersonaComponent, CrearPersonaComponent*/]
=======
  declarations: [/*JaumeMGComponent, LlistarPersonaComponent, ModificarPersonaComponent, EsborrarPersonaComponent, CrearPersonaComponent*/
  PersonesComponent
  ]
>>>>>>> 363d459a32b04c4553fd695ae928ff3848e5e2c8
})
export class PersonesModule { }

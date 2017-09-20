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

@NgModule({
  imports: [
    CommonModule,
      PersonesRoutingModule
    //JaumeMGRoutingModule,
    //NgxPaginationModule
  ],

  declarations: [PersonesComponent/*JaumeMGComponent, LlistarPersonaComponent, ModificarPersonaComponent, EsborrarPersonaComponent, CrearPersonaComponent*/]
})
export class PersonesModule { }

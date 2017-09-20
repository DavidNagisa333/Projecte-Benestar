import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    //JaumeMGRoutingModule,
    //NgxPaginationModule
  ],
  declarations: [/*JaumeMGComponent, LlistarPersonaComponent, ModificarPersonaComponent, EsborrarPersonaComponent, CrearPersonaComponent*/
  PersonesComponent
  ]
})
export class PersonesModule { }

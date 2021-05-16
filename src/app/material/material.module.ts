import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';



const materialComponents = [
                             MatButtonModule,
                             MatMenuModule,
                             MatToolbarModule,
                             MatIconModule,
                             MatFormFieldModule,
                             MatSidenavModule,
                             MatListModule,
                             MatDividerModule
                           ];
 

@NgModule ({
imports: [materialComponents],
exports: [materialComponents]
})

export class MaterialModule { }

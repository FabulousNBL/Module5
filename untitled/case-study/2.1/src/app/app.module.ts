import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceModalCreateComponent } from './service-modal-create/service-modal-create.component';
import { ServiceModalEditComponent } from './service-modal-edit/service-modal-edit.component';
import { ServiceModalDeleteComponent } from './service-modal-delete/service-modal-delete.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ServiceListComponent,
        ServiceModalCreateComponent,
        ServiceModalEditComponent,
        ServiceModalDeleteComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

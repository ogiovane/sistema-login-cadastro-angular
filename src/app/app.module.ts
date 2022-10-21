import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMaskModule} from 'ngx-mask';
import {ClientesService} from './clientes.service';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatDialogModule,
        NgxMaskModule.forRoot(),
        ToastrModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,

    ],
    providers: [
        ClientesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

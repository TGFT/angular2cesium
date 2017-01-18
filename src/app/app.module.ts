import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AngularCesiumModule} from "../angular-cesium/angular-cesium.module";
import {PerformanceFormComponent} from "./performence-test/performance-form/performance-form.component";
import {TracksLayerComponent} from "./tracks-layer/tracks-layer.component";
import { BaseLayerComponent } from './base-layer/base-layer.component';
import { KavimLayerComponent } from './kavim-layer/kavim-layer.compnent';


@NgModule({
    declarations: [
        AppComponent,PerformanceFormComponent,TracksLayerComponent, BaseLayerComponent, KavimLayerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularCesiumModule

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

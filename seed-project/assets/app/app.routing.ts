import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routes";

const APP_ROUTES: Routes = [
    {
        path: "messages",
        component: MessagesComponent
    },
    {
        path: "auth",
        component: AuthenticationComponent,
        children: AUTH_ROUTES
    },    
    {
        path: "",
        redirectTo: "/messages",
        pathMatch: "full" // Ensure that only blank path is handled
    }
];

// Register the routes and export
export const Routing = RouterModule.forRoot(APP_ROUTES);

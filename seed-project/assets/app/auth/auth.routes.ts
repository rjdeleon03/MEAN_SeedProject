import { Routes } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { 
        path: "signup",
        component: SignupComponent
    },
    { 
        path: "signin",
        component: SigninComponent
    },
    { 
        path: "logout",
        component: LogoutComponent
    },
    { 
        path: "",
        redirectTo: "signup", // Redirect to /auth/signup path
        pathMatch: "full" // Ensure that only blank path is handled
    }
];
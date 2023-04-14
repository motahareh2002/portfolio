/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface BaseFooter {
    }
    interface BaseHeader {
    }
    interface PageAbout {
    }
    interface PageHome {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLBaseFooterElement extends Components.BaseFooter, HTMLStencilElement {
    }
    var HTMLBaseFooterElement: {
        prototype: HTMLBaseFooterElement;
        new (): HTMLBaseFooterElement;
    };
    interface HTMLBaseHeaderElement extends Components.BaseHeader, HTMLStencilElement {
    }
    var HTMLBaseHeaderElement: {
        prototype: HTMLBaseHeaderElement;
        new (): HTMLBaseHeaderElement;
    };
    interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {
    }
    var HTMLPageAboutElement: {
        prototype: HTMLPageAboutElement;
        new (): HTMLPageAboutElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "base-footer": HTMLBaseFooterElement;
        "base-header": HTMLBaseHeaderElement;
        "page-about": HTMLPageAboutElement;
        "page-home": HTMLPageHomeElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface BaseFooter {
    }
    interface BaseHeader {
    }
    interface PageAbout {
    }
    interface PageHome {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "base-footer": BaseFooter;
        "base-header": BaseHeader;
        "page-about": PageAbout;
        "page-home": PageHome;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "base-footer": LocalJSX.BaseFooter & JSXBase.HTMLAttributes<HTMLBaseFooterElement>;
            "base-header": LocalJSX.BaseHeader & JSXBase.HTMLAttributes<HTMLBaseHeaderElement>;
            "page-about": LocalJSX.PageAbout & JSXBase.HTMLAttributes<HTMLPageAboutElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
        }
    }
}

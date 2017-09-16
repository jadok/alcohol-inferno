
import { Route } from 'inferno-router';
import { IRouteProps, IRouteHook } from 'inferno-router/Route';
import Component from 'inferno-component';

export interface CSSLink {
  media: string;
  href: string;
}

export interface IRoutePageProps extends IRouteProps {
 params?: any;
 onEnter?: IRouteHook;
 onLeave?: IRouteHook;
 path: string;
 children: Array<Component<any, any>>;
 component?: Component<any, any>;
 getComponent(nextState: any, callback: (error: any, comp: Component<any, any>) => void): void;
  css: CSSLink | Array<CSSLink>;
}

export class RouterPage extends Route {
  constructor(props?: IRoutePageProps, context?: any) {
    super(props, context);
  }

  private createLink(data: CSSLink) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.media = data.media;
    link.href = data.href;
    return link;
  }

  public componentWillMount() {
    const CSSFile = this.props.css;
    if (CSSFile) {
      const head = document.getElementsByTagName('head')[0];
      if (CSSFile.length > 0) {
        for (let i = 0; i < CSSFile.length; i++) {
          var link = this.createLink(CSSFile[i]);
          head.appendChild(link);
        }
      } else {
        var link = this.createLink(CSSFile);
        head.appendChild(link);
      }
    }
  }
}

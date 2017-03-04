import {render} from 'inferno';
import { MyComponent } from './mycomponent';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service.worker.js');
}

const container = document.getElementById('app');

render(<MyComponent />, container);
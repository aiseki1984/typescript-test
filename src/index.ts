import { greeting } from './util';

const app: HTMLElement = document.getElementById('app');
const foo: string = 'Hell-o world';

app.innerText = foo;

greeting();

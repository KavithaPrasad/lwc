import { LightningElement, createElement } from 'lwc';
import SlotContainer from 'x/slotContainer';

export default class ParentSpecialized extends LightningElement {
    renderedCallback() {
        const createdDiv = document.createElement('div');
        createdDiv.classList.add('manual-rendered');

        this.template.appendChild(createdDiv);
    }
}

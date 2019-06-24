import { ValidatorFn } from '@angular/forms';
export class FormFieldConfig {
    constructor(
        private key: string,
        private type: string,
        private isId: boolean,
        label: string,
        validation: ValidatorFn[]) { }
}

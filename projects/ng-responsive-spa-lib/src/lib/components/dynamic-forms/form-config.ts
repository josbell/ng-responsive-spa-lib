import { FormFieldConfig } from './form-field-config';

export class FormConfig {
    constructor(
        private fieldsConfig: FormFieldConfig[],
        private formConfig?: any) {

    }
}

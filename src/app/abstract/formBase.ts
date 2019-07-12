import { FormGroup, AbstractControl } from '@angular/forms';

export abstract class FormBase {

    constructor(protected formGroup: FormGroup) {

    }

    public IsValidForm(): boolean {
        if (!this.formGroup.valid) {
            Object.keys(this.formGroup.controls).forEach(field => {
                const control = this.formGroup.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return false;
        }

        return true;
    }

    public GetValue(controlName: string): any {
        return this.formGroup.get(controlName).value;
    }

    public SetValue(controlName: string, value: any) {
        this.formGroup.get(controlName).setValue(value);
    }

    public GetControl(controlName: string): AbstractControl {
        return this.formGroup.get(controlName);
    }

    public SetFormValues(values: any) {
        this.formGroup.patchValue(values);
    }
}
import { FormGroup } from '@angular/forms';

export function PasswordValidator(newPassword: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
        const fetchedNewPassword = formGroup.controls[newPassword];
        const fetchedConfirmNewPassword = formGroup.controls[confirmPassword];

        if (fetchedConfirmNewPassword.errors && !fetchedConfirmNewPassword.errors.mustMatch) {
            return;
        }

        if (fetchedNewPassword.value !== fetchedConfirmNewPassword.value) {
            fetchedConfirmNewPassword.setErrors({ mustMatch: true });
        }
        else {
            fetchedConfirmNewPassword.setErrors(null);
        }
    };
}
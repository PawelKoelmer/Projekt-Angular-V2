import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class MyValidators {
    public static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any} => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        };
    }
    public static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value;
        const confirmPassword: string = control.get('confirmPassword').value;
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
    static get account_validation_messages() {
        return {
            name: [
                { type: 'required', message: 'Imię jest wymagane' },
            ],
            surname: [
                { type: 'required', message: 'Nazwisko jest wymagane' }
            ],
            email: [
                { type: 'required', message: 'Email jest wymagany' },
                { type: 'email', message: 'Email jest niepoprawny' }
            ],
            phone: [
                { type: 'pattern', message: 'Telefon może zawierać wyłącznie cyfry, spacje oraz znaki + ( ) -' }
            ],
            confirmPassword: [
                { type: 'required', message: 'Proszę potwierdzić hasło' },
                { type: 'areEqual', message: 'Nieprawidłowo powtórzone hasło' }
            ],
            password: [
                { type: 'required', message: 'Hasło jest wymagane' },
                { type: 'minlength', message: 'Hasło musi składać się z co najmniej 8 znaków' },
                { type: 'hasCapitalCase' && 'hasSpecialCharacters', message: 'Hasło musi zawierać przynajmniej jedną wielką literę oraz jeden ze znaków: @ # $ % ^ &' }
            ],
        };
    }

}

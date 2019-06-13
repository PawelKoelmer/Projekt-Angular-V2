import { AbstractControl } from '@angular/forms';


export class EmailValidation {
    static MatchEmail(abstractControl: AbstractControl){
        const regexp = /^ [0 - 9a - zA - z.] *@[a - z]*.[a - z]{ 2, 3 }$/g;
        const confirmEmail = abstractControl.get('email').value;
        console.log(confirmEmail);
        console.log(regexp.test(confirmEmail));
        if (!(regexp.test(confirmEmail))) {
            abstractControl.get('email').setErrors({
            MatchEmail: true,
        });
        } else { return null; }
    }
}

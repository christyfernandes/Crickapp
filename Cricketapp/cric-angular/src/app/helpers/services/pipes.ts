import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'PlayerFilterPipe',
})
export class PlayerFilterPipe implements PipeTransform {
    transform(value: any, input: string, name: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                if (name == "name") {
                    console.log(el.name.toLowerCase().indexOf(input) > -1);
                    return el.name.toLowerCase().indexOf(input) > -1;
                }
            })
        }
        return value;
    }
}
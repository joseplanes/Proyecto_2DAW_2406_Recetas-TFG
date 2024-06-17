import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPatron',
    standalone: true
})
export class PatronPipe implements PipeTransform {

    transform(value: any[], patron: string): any[] {
        if (value && value.length)
            return value.filter(a => a.title.toLowerCase().includes(patron.toLowerCase()));
                // || a.symbol.toLowerCase().includes(patron.toLowerCase()));
        else
            return []
    }
}

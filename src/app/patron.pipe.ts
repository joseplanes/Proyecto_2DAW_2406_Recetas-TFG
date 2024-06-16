import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPatron',
    standalone: true
})
export class PatronPipe implements PipeTransform {

    transform(value: any[], patron: string): any[] {
        if (value && value.length)
            // cambiar el name al nombre de la variable que queremos filtrar, en mi caso es name
            return value.filter(a => a.title.toLowerCase().includes(patron.toLowerCase()));
                // || a.symbol.toLowerCase().includes(patron.toLowerCase()));
        else
            return []
    }
}

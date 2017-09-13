import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'titleCaseFormat'
})

export class TitleCaseFormatPipe implements PipeTransform{
    transform(value:string, args?:any){
        if (!value)
            return null;

        let words = value.split(' ');

        let tempResult: string = "";
        for (let i=0;i<words.length;i++)
        {
            var word = words[i];
            if (i>0 && this.isPreposition(words[i])){
                words[i] = word.toLowerCase();
            }
            else{
                words[i] = this.toTitleCase(word);
            }
        }

        return words.join(' ');
    }
    
    private toTitleCase(word: string): string {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        let prepositions = ['of','the'];
        return prepositions.includes(word.toLowerCase());
    }
}
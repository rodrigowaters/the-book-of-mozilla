import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    items = [];

    constructor() {
        this.initializeItems();
    }

    search(ev: any) {

        // Resetar items
        this.initializeItems();

        // Localizar valor digitado
        const val = ev.target.value;

        // Validar se tem conteudo
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

    initializeItems() {

        this.items = [
            {
                'title': '12-10',
                'description': 'E a besta sairá cercada por uma turva nuvem de vingança. A Casa dos descrentes será arrasada e eles serão queimados na terra. Suas marcas devem brilhar até o fim dos dias'
            },
            {
                'title': '3-31',
                'description': 'E a besta formará uma legião. Seu número ser á maior mil vezes mil. O barulho de um milhão de teclados semelhante a uma grande tempestade cobrirá a terra, e os seguidores de Mammon tremerão.'
            },
            {
                'title': '7-15',
                'description': 'Por fim a criatura sucumbiu e os infiéis regozijaram-se. Porém nem tudo fora destruído, pois das cinzas ergueu-se um imponente pássaro. O pássaro mirou os infiéis e lançou sobre eles o fogo e trovão. A criatura renascera com forças renovadas e os discípulos de Mamon encolheram-se horrorizados.'
            },
            {'title': '8-20', 'description': 'E assim o Criador olhou para a besta renascer e viu que era bom.'},
            {
                'title': '11-1',
                'description': 'E quando a Besta tinha tomado um quarto da Terra sobre seu domínio, um quarto de cem Pássaros de Enxofre voou das Profundezas. Os pássaros cruzaram centenas de montanhas e encontraram vinte e quatro homens sábios que vieram das estrelas. E então começou, os crentes se atreveram a ouvir. Em seguida, pegaram suas canetas e se atreveram a criar. Finalmente, eles ousaram compartilhar seus escritos com toda a humanidade. Espalhando palavras de liberdade e rompendo as correntes, os pássaros trouxeram libertação para todos.'
            },
            {
                'title': '11-9',
                'description': 'Mamon adormeceu. E o renascimento da criatura disseminou-se por toda a terra e seus seguidores formaram uma legião. E eles apregoaram a mensagem e sacrificaram plantações com fogo, com a astúcia das raposas. E eles criaram um novo mundo à sua imagem e semelhança como prometido pelo texto sagrado e contaram da criatura para seus filhos. Mamon despertou e, vejam só, nada mais era que um discípulo.'
            },
            {
                'title': '11-14',
                'description': 'A Besta adotou novos trajes e estudou os caminhos do Tempo, do Espaço, da Luz e do Fluxo de energia através do Universo. De seus estudos, a Besta formou novas estruturas de metal oxidado e proclamou suas glórias. E os seguidores da Besta se alegraram, encontrando um propósito renovado nesses ensinamentos.'
            },
            {
                'title': '15-1',
                'description': 'Os gêmeos de Mamon brigaram. Seus conflitos mergulharam o mundo em uma nova escuridão. As trevas causavam repulsa à criatura. Ela então começou a mover-se mais rápido e cresceu mais forte, saiu e disseminou-se. E as criaturas trouxeram fogo e luz à escuridão.'
            },
            {
                'title': 'xx-xx',
                'description': 'Os gêmeos de Mamon desuniram-se. Suas rivalidades mergulharam o mundo em uma nova escuridão. As trevas causavam repulsa à criatura. Ela então começou a mover-se mais rápido e cresceu mais forte, saiu e disseminou-se. E as criaturas trouxeram fogo e luz à escuridão.'
            }
        ];

    }

}

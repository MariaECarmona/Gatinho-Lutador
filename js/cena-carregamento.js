export default class CenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const barraDeProgresso = this.add.graphics();

        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });

        // todos os recursos que devem ser pré-carregados
        this.load.image('fundo', 'img/fundo.png');
        this.load.image('chao', 'img/chao.png');
        this.load.image('plataforma', 'img/platform.png');
        this.load.image('plataforma2', 'img/platform2.png');
        this.load.image('comida', 'img/comida.png');
        this.load.spritesheet('gato', 'img/sprite-gato.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {

    }

    update() {

    }
}
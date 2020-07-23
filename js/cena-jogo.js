import Jogador from "./jogador.js";

export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({key: 'CenaJogo'});
    }

    preload() {

    }

    create() {
        const imagemFundo = this.add.image(0, -15, 'fundo');
        imagemFundo.setOrigin(0, 0);
        
        let pontos = 0;
        let textoPontos;

        this.jogador = new Jogador(this);
        

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0, 400, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(183,400, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(368,400, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(510,400, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(-90, 150,'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(215, 220, 'plataforma2').setOrigin(0, 0).refreshBody();
        plataformas.create(500, 357, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(350, 275, 'plataforma2').setOrigin(0, 0).refreshBody();
        
        textoPontos = this.add.text(450, 10, "Pontuação: 0", {
            fontSize: "32px",
            fill: "#000",
            fontFamily: "Arial",
          });

        const comidas = this.physics.add.group();
        comidas.createFromConfig({
            key: 'comida',
            repeat: 6,
            setXY: {x: 20, y:110, stepX: 100},
            setScale: {x:0.8,y:0.8}

        });

        comidas.children.iterate((comida) => {
            comida.setBounceY(Phaser.Math.FloatBetween(0.4,0.8));
        });

        this.physics.add.collider(comidas,plataformas);
        

        function coletaComida(jogador,comida){
            comida.disableBody(true,true);
            pontos+=10;

            if(comidas.countActive(true)===0){
                comidas.children.iterate((comida)=>{
                    comidas.enableBody(true,comida.x,0,true,true);

                });
                //let x = this.jogador.sprite.x<200?Phaser.Math.Between(200,400):Phaser.Math.Between(0,200);
            }
            
            
        }
        this.physics.add.overlap(this.jogador.sprite,comidas, coletaComida,null,this);

        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {
        const jogador = this.jogador.sprite;

        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-160);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }
        else if (this.teclas.right.isDown) {
            jogador.setVelocityX(160);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } else {
            jogador.setVelocityX(0);
            if (jogador.body.touching.down) {
                jogador.anims.play('atoa');
            }
        }

        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-140);
            jogador.anims.play('pulando');
        }
    }
}
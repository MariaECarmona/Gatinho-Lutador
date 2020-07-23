import CenaCarregamento from './cena-carregamento.js';
import CenaJogo from './cena-jogo.js';

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 450,
    parent: 'jogo',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 110
            },
            //debug: true
        }
    },
    scene: [
        CenaCarregamento,
        CenaJogo
    ]
};

const jogo = new Phaser.Game(config);
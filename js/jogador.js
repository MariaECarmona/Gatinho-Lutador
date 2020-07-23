export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(30, 300, 'gato');
        this.sprite.body.setSize(20, 45);
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setScale(1.7,1.7);

        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('gato', { start:13, end:20}),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'atoa',
            frames: cena.anims.generateFrameNumbers('gato', { start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'pulando',
            frames: cena.anims.generateFrameNumbers('gato', { start: 26, end: 33}),
            frameRate: 10,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('gato', { start: 13, end: 20 }),
            frameRate: 10,
            repeat: -1
        });
    
    }
}
// src/components/PhaserGame.js
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import './PhaserGame.css';

const PhaserGame = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    class MainScene extends Phaser.Scene {
      preload() {
        this.load.spritesheet('mario', 'assets/mario.png', {
          frameWidth: 18,
          frameHeight: 16,
        });
        this.load.spritesheet('block', 'assets/misteryBlock.png', {
          frameWidth: 16,
          frameHeight: 16,
        });
        this.load.image('floor', 'assets/floorbricks.png');
      }


      create() {
        // Suelo visual y físico con bloques de ladrillo
        this.ground = this.physics.add.staticGroup();
        const blockWidth = 32;
        const groundY = 434;
        for (let x = 0; x < 800; x += blockWidth) {
          this.ground.create(x + blockWidth / 2, groundY, 'floor').setScale(1).refreshBody();
        }

        // Mario con físicas
        this.player = this.physics.add.sprite(400, 400, 'mario', 0).setScale(1);
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.physics.add.collider(this.player, this.ground);

        this.player.setOrigin(0., 1);
        this.player.body.setSize(20, 20).setOffset(-2, -4);

        // Animaciones de Mario
        this.anims.create({
          key: 'walk',
          frames: this.anims.generateFrameNumbers('mario', { frames: [1, 2, 3, 2] }),
          frameRate: 8,
          repeat: -1,
        });

        this.anims.create({
          key: 'jump',
          frames: [{ key: 'mario', frame: 5 }],
          frameRate: 1,
        });


        // Input del teclado
        this.cursors = this.input.keyboard.createCursorKeys();

        // Bloques misteriosos
        this.blocks = this.physics.add.staticGroup();
        const blockData = [
          { x: 300, y: 350, text: 'Sobre mí' },
          { x: 400, y: 350, text: 'Proyectos' },
          { x: 500, y: 350, text: 'Contacto' },
        ];

        this.blockTextMap = new Map();

        blockData.forEach(({ x, y, text }) => {
          const block = this.blocks.create(x, y, 'block', 0);
          const label = this.add.text(x, y - 40, '', {
            font: '14px monospace',
            fill: '#ffffff',
            backgroundColor: '#000000aa',
            padding: { x: 6, y: 2 },
          }).setOrigin(0.5).setVisible(false);

          this.blockTextMap.set(block, label);
        });

        this.physics.add.collider(this.player, this.blocks, this.hitBlock, null, this);
      }

      hitBlock(player, block) {
        if (player.body.velocity.y < 0 && player.body.touching.up && block.body.touching.down) {
          const label = this.blockTextMap.get(block);
          if (label) {
            label.setVisible(true);
            this.time.delayedCall(2000, () => {
              label.setVisible(false);
            });
          }
        }
      }

      update() {
        // Movimiento lateral
        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-160);
          this.player.flipX = true;

          if (this.player.body.onFloor()) {
            this.player.anims.play('walk', true);
          }
        } else if (this.cursors.right.isDown) {
          this.player.setVelocityX(160);
          this.player.flipX = false;

          if (this.player.body.onFloor()) {
            this.player.anims.play('walk', true);
          }
        } else {
          this.player.setVelocityX(0);

          if (this.player.body.onFloor()) {
            this.player.anims.stop();
            this.player.setFrame(0);
          }
        }

        // Salto (desde el suelo)
        if (this.cursors.up.isDown && this.player.body.onFloor()) {
          this.player.setVelocityY(-350);
          this.player.anims.play('jump', true);
        }

        // Si está en el aire (cayendo o subiendo) y no se reproduce 'jump', forzarla
        if (!this.player.body.onFloor() && this.player.anims.currentAnim?.key !== 'jump') {
          this.player.anims.play('jump', true);
        }


      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 450,
      parent: gameContainerRef.current,
      backgroundColor: '#5c94fc',
      scene: MainScene,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 800 },
          debug: false,
        },
      },
      audio: { noAudio: true },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="phaser-wrapper">
      <div ref={gameContainerRef} className="phaser-canvas-container" />
      <div className="phaser-ground" />
    </div>
  );
};

export default PhaserGame;

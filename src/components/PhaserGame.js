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
        this.load.spritesheet('coin', 'assets/coin.png', {
          frameWidth: 16,
          frameHeight: 16,
        });
        this.load.image('floor', 'assets/floorbricks.png');
        this.load.image('immovable', 'assets/immovableBlock.png');
        this.load.image('cloud', 'assets/cloud1.png');
      }

      create() {
        
        this.ground = this.physics.add.staticGroup();
        for (let x = 0; x < 800; x += 32) {
          this.ground.create(x + 16, 434, 'floor').setScale(1).refreshBody();
        }

        // Nubes con texto animado
        const cloudData = [
          { x: 200, y: 130, text: 'SOBRE MI' },
          { x: 400, y: 130, text: 'PROYECTOS' },
          { x: 600, y: 130, text: 'CONTACTO' },
        ];

        cloudData.forEach(({ x, y, text }) => {
          const cloud = this.add.image(x, y, 'cloud').setScale(0.55).setOrigin(0.5, 1);

          const label = this.add.text(x, y - 25, text, {
            fontFamily: 'MarioFont',
            fontSize: '20px',
            color: '#000000',
            resolution: 1,
          }).setOrigin(0.5);



          this.tweens.add({
            targets: [cloud, label],
            y: '+=8',
            x: '+=5',
            duration: 4000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
          });
        });

        this.intermediatePlatform = this.physics.add.staticGroup();
        [
          { x: 150, y: 355 }, { x: 200, y: 305 }, { x: 250, y: 355 },
          { x: 350, y: 355 }, { x: 400, y: 305 }, { x: 450, y: 355 },
          { x: 550, y: 355 }, { x: 600, y: 305 }, { x: 650, y: 355 },
        ].forEach(({ x, y }) => {
          this.intermediatePlatform.create(x, y, 'immovable').setScale(1).refreshBody();
        });

        this.player = this.physics.add.sprite(400, 400, 'mario', 0).setScale(1);
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.intermediatePlatform);
        this.player.setOrigin(0, 1);
        this.player.body.setSize(20, 20).setOffset(-2, -4);

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

        this.anims.create({
          key: 'coinSpin',
          frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1,
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.blocks = this.physics.add.group();
        const blockData = [
          { x: 200, y: 225 },
          { x: 400, y: 225 },
          { x: 600, y: 225 },
        ];

        blockData.forEach(({ x, y }) => {
          const block = this.physics.add.sprite(x, y, 'block', 0);
          block.setImmovable(true);
          block.body.setAllowGravity(false);
          block.body.moves = false;
          block.alreadyHit = false;
          this.blocks.add(block);
        });

        this.physics.add.collider(this.player, this.blocks, this.hitBlock, null, this);
      }

      hitBlock(player, block) {
        if (
          player.body.velocity.y < 0 &&
          player.body.touching.up &&
          block.body.touching.down &&
          !block.alreadyHit
        ) {
          block.alreadyHit = true;

          const originalY = block.y;
          const frames = [0, 1, 2];
          let i = 0;

          this.time.addEvent({
            delay: 80,
            repeat: frames.length - 1,
            callback: () => {
              block.setFrame(frames[i]);
              i++;
            }
          });

          this.tweens.add({
            targets: block,
            y: originalY - 6,
            duration: 80,
            yoyo: true,
            ease: 'Power1',
            onComplete: () => {
              block.y = originalY;
              this.time.delayedCall(80 * frames.length, () => {
                block.setFrame(2);
              });
            }
          });

          // Crear y animar la moneda
          const coin = this.add.sprite(block.x, block.y - 16, 'coin').setScale(1);
          coin.play('coinSpin');

          this.tweens.add({
            targets: coin,
            y: coin.y - 20,
            alpha: 0,
            duration: 400,
            ease: 'Power1',
            onComplete: () => coin.destroy()
          });
        }
      }

      update() {
        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-160);
          this.player.flipX = true;
          if (this.player.body.onFloor()) this.player.anims.play('walk', true);
        } else if (this.cursors.right.isDown) {
          this.player.setVelocityX(160);
          this.player.flipX = false;
          if (this.player.body.onFloor()) this.player.anims.play('walk', true);
        } else {
          this.player.setVelocityX(0);
          if (this.player.body.onFloor()) {
            this.player.anims.stop();
            this.player.setFrame(0);
          }
        }

        if (this.cursors.up.isDown && this.player.body.onFloor()) {
          this.player.setVelocityY(-350);
          this.player.anims.play('jump', true);
        }

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
      render: {
        antialias: true,
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

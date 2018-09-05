import Rocket from './Rocket';

export default class Weapon {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.shooting = {};
    this.ammo = 10;
  }

  shoot(x, y) {
    if (this.ammo > 0) {
      this.shooting[this.ammo] = new Rocket(this.canvas, this.ctx, x, y, this.ammo);
      this.ammo--;
    }
  }

  destroyRocket(n) {
    delete this.shooting[n];
  }
}
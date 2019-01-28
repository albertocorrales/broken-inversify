import {Container, injectable, inject} from 'inversify';
import 'reflect-metadata';

let container: Container = new Container();

const KatanaType: symbol = Symbol();
const ShurikenType: symbol = Symbol();
const NinjaType: symbol = Symbol();

@injectable()
class Katana {
    public hit() {
        return 'cut!';
    }
}

@injectable()
class Shuriken {
    public throw() {
        return 'hit!';
    }
}

@injectable()
class Ninja {

    public constructor(
        @inject(KatanaType) private katana: Katana,
        @inject(ShurikenType) private shuriken: Shuriken,
    ) {
    }

    public fight() {
        return this.katana.hit();
    }

    public sneak() {
        return this.shuriken.throw();
    }

}

container.bind<Katana>(KatanaType).to(Katana).inSingletonScope();
container.bind<Shuriken>(ShurikenType).to(Shuriken).inSingletonScope();
container.bind<Ninja>(NinjaType).to(Ninja).inSingletonScope();

container.get(NinjaType);